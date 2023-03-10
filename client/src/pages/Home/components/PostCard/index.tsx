import React from 'react'
import PostCardUI from './PostCardUI'

interface PropsType {
    post: any,
}

const PostCard: React.FC<PropsType> = ({
    post
}) => {

  return (
    <PostCardUI post={post}/>
  )
}

export default PostCard