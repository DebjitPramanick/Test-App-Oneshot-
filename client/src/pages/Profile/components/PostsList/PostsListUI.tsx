import React from 'react'
import { Button } from '../../../../components/Styled/Form'
import PostCard from '../../../../components/PostCard'
import { ListContainer } from './styles'
import Loader from '../../../../components/Loader';
import AdminActions from '../AdminActions';
import { useUser } from '../../../../contexts/UserContext';

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
    const { user } = useUser()
    return (
        <ListContainer>
            {loading ? <Loader type='page' /> : (
                <>
                    {user.isAdmin && (<AdminActions />)}
                    <div style={{ marginTop: '16px' }}>
                        {posts.map((post: any) => (
                            <PostCard key={post._id} post={post} actions={true} />
                        ))}
                    </div>
                    <Button onClick={loadMorePosts} style={{margin: 'auto'}}>Load More</Button>
                </>
            )}
        </ListContainer>
    )
}

export default PostsListUI