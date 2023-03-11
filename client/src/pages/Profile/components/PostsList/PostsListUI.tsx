import React from 'react'
import { Button } from '../../../../components/Styled/Form'
import PostCard from '../../../../components/PostCard'
import { ListContainer } from './styles'
import Loader from '../../../../components/Loader';
import { useUser } from '../../../../contexts/UserContext';
import { Text } from '../../../../components/Styled/Typography';

interface PropsType {
    posts: any[],
    refetchPosts: () => void,
    loadMorePosts: () => void,
    loading: boolean,
    allFetched: boolean
}

const PostsListUI: React.FC<PropsType> = ({
    posts,
    loadMorePosts,
    loading,
    refetchPosts,
    allFetched
}) => {
    return (
        <ListContainer>
            <div style={{ marginTop: '16px' }}>
                {posts.map((post: any) => (
                    <PostCard
                        key={post._id}
                        post={post}
                        actions={true}
                        refetchPosts={refetchPosts} />
                ))}
            </div>

            {loading ? <Loader type='page' />
                : posts.length === 0 ? <Text style={{ textAlign: 'center' }}>No Posts found</Text>
                    : !allFetched ? (<Button style={{ margin: 'auto' }} onClick={loadMorePosts}>Load More</Button>)
                        : null}
        </ListContainer>
    )
}

export default PostsListUI