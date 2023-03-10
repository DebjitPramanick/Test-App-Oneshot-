import React, { useState, useEffect } from 'react'
import { getUser } from '../../api/user.api';
import { UserType } from '../../types/user.type';
import PostCardUI from './PostCardUI'
import { toast } from 'react-toastify'

interface PropsType {
  post: any,
  actions?: boolean
}

const PostCard: React.FC<PropsType> = ({
  post,
  actions = false
}) => {

  const [postUser, setPostUser] = useState<UserType | null>(null);
  const [showEditPopup, setShowEditPopup] = useState<string | null>(null)
  const [showDeletPopup, setShowDeletePopup] = useState<string | null>(null)

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

  const toggleEditPopup = (postId: string | null) => {
    setShowEditPopup(postId)
  }

  const toggleDeletePopup = (postId: string | null) => {
    setShowDeletePopup(postId)
  }

  return (
    <PostCardUI
      post={post}
      postUser={postUser}
      actions={actions}
      shouldEdit={showEditPopup}
      shouldDelete={showDeletPopup}
      toggleEditPopup={toggleEditPopup}
      toggleDeletePopup={toggleDeletePopup}/>
  )
}

export default PostCard