import React from 'react'
import { Button } from '../../../../components/Styled/Form'
import PostCard from '../../../Home/components/PostCard'
import { ListContainer } from './styles'
import Loader from '../../../../components/Loader';

interface PropsType {
    posts: any[],
    refetchPosts: () => void,
    loadMorePosts: () => void,
    loading: boolean
}

const PostsListUI: React.FC<PropsType> = ({
    posts,
    loadMorePosts,
    loading,
    refetchPosts
}) => {
    return (
        <ListContainer>
            {loading ? <Loader type='page' /> : (
                <>
                    <div style={{ marginTop: '16px' }}>
                        {posts.map((post: any) => (
                            <PostCard key={post._id} post={post} actions={true}/>
                        ))}
                    </div>
                    <Button onClick={loadMorePosts}>Load More</Button>
                </>
            )}
        </ListContainer>
    )
}

export default PostsListUI