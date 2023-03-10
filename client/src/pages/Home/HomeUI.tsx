import React from 'react'
import PostFormPopUp from '../../components/Popups/PostFormPopUp'
import { Button } from '../../components/Styled/Form'
import { PageLayout } from '../../components/Styled/Layout'
import { Avatar } from '../../components/Styled/Shared'
import { Text } from '../../components/Styled/Typography'
import { useUser } from '../../contexts/UserContext'
import PostCard from './components/PostCard'
import { CreatePostContainer } from './styles'

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

    const {user} = useUser()

    return (
        <PageLayout>
            <CreatePostContainer>
                <Avatar src={user.profile_pic} width={40} />
                <div className='create-post-trigger' onClick={toggleCreatePopUp}>
                    <Text>What's on your mind?</Text>
                </div>
            </CreatePostContainer>
            <div style={{ marginTop: '16px' }}>
                {posts.map((post: any) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
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