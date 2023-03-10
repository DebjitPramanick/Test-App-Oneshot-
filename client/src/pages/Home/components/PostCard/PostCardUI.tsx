import React from 'react'

interface PropsType {
    post: any,
}

const PostCardUI: React.FC<PropsType> = ({
    post
}) => {
  return (
    <div>{post.title}</div>
  )
}

export default PostCardUI