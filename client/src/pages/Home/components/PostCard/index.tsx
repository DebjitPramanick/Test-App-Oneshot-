import React, { useState, useEffect } from 'react'
import { getUser } from '../../../../api/user.api';
import { UserType } from '../../../../types/user.type';
import PostCardUI from './PostCardUI'
import { toast } from 'react-toastify'

interface PropsType {
  post: any,
}

const PostCard: React.FC<PropsType> = ({
  post
}) => {

  const [postUser, setPostUser] = useState<UserType | null>(null);

  useEffect(() => {
    fetchUserData();
  }, [])


  const fetchUserData = async () => {
    try {
      const response: any = await getUser(post.user);
      const userData = response.user;
      setPostUser(userData)
    } catch (error) {
      toast.error("Error occurred!", {
        autoClose: 3500,
        pauseOnHover: true
      })
    }
  }

  return (
    <PostCardUI
      post={post}
      postUser={postUser} />
  )
}

export default PostCard