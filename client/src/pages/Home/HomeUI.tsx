import React from 'react'
import { Button } from '../../components/Styled/Form'
import { PageLayout } from '../../components/Styled/Layout'
import PostCardUI from './components/PostCard/PostCardUI'

interface PropsType {
    posts: any[],
    loadMorePosts: () => void
}

const HomeUI: React.FC<PropsType> = ({
    posts,
    loadMorePosts
}) => {
    return (
        <PageLayout>
            {posts.map((post: any) => (
                <PostCardUI key={post._id} post={post}/>
            ))}
            <Button onClick={loadMorePosts}>Load More</Button>
        </PageLayout>
    )
}

export default HomeUI