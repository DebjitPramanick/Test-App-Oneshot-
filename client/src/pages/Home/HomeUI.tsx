import React from 'react'
import PostFormPopUp from '../../components/Popups/PostFormPopUp'
import { Button } from '../../components/Styled/Form'
import { PageLayout } from '../../components/Styled/Layout'
import PostCardUI from './components/PostCard/PostCardUI'

interface PropsType {
    posts: any[],
    refetchPosts: () => void,
    loadMorePosts: () => void,
    toggleCreatePopUp: () => void,
    showCreatePopUp: boolean,
    loading: boolean
}

const HomeUI: React.FC<PropsType> = ({
    posts,
    loadMorePosts,
    loading,
    refetchPosts,
    toggleCreatePopUp,
    showCreatePopUp
}) => {
    return (
        <PageLayout>
            <Button onClick={toggleCreatePopUp}>Create Post</Button>
            {posts.map((post: any) => (
                <PostCardUI key={post._id} post={post} />
            ))}
            <Button onClick={loadMorePosts}>Load More</Button>

            {showCreatePopUp && (
                <PostFormPopUp
                    closePopup={toggleCreatePopUp}
                    refetchPosts={refetchPosts} />
            )}
        </PageLayout>
    )
}

export default HomeUI