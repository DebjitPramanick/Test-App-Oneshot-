import React from 'react'
import Loader from '../../components/Loader'
import PostFormPopUp from '../../components/Popups/PostFormPopup'
import { Button } from '../../components/Styled/Form'
import { PageLayout } from '../../components/Styled/Layout'
import { Avatar } from '../../components/Styled/Shared'
import { Text } from '../../components/Styled/Typography'
import { useUser } from '../../contexts/UserContext'
import PostCard from '../../components/PostCard'
import { CreatePostContainer } from './styles'

interface PropsType {
    posts: any[],
    refetchPosts: () => void,
    loadMorePosts: () => void,
    toggleCreatePopUp: () => void,
    showCreatePopUp: boolean,
    loading: boolean,
    allFetched: boolean
}

const HomeUI: React.FC<PropsType> = ({
    posts,
    loadMorePosts,
    loading,
    refetchPosts,
    toggleCreatePopUp,
    showCreatePopUp,
    allFetched
}) => {

    const { user } = useUser()

    return (
        <PageLayout>
            <CreatePostContainer>
                <Avatar src={user.profile_pic} width={40} />
                <div className='create-post-trigger' onClick={toggleCreatePopUp}>
                    <Text>What's on your mind?</Text>
                </div>
            </CreatePostContainer>
            {loading ? (<Loader type='page' />) : (
                <>
                    <div style={{ marginTop: '16px' }}>
                        {posts.map((post: any) => (
                            <PostCard
                                key={post._id}
                                post={post}
                                actions={user.isAdmin}
                                refetchPosts={refetchPosts} />
                        ))}
                    </div>
                    {posts.length === 0 ? <Text style={{ textAlign: 'center' }}>No Results found</Text> : (
                        !allFetched ? <Button onClick={loadMorePosts} style={{ margin: 'auto' }}>Load More</Button> : null
                    )}
                </>
            )}

            <PostFormPopUp
                closePopup={toggleCreatePopUp}
                refetchPosts={refetchPosts}
                show={showCreatePopUp} />
        </PageLayout>
    )
}

export default HomeUI;