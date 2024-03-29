import React, { useState, useEffect } from 'react'
import { getUser } from '../../api/user.api';
import { deletePost } from '../../api/post.api'
import { UserType } from '../../types';
import PostCardUI from './PostCardUI'
import { toast } from 'react-toastify'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useUser } from '../../contexts/UserContext';

interface PropsType {
  post: any,
  actions?: boolean,
  refetchPosts?: () => void,
}

const PostCard: React.FC<PropsType> = ({
  post,
  actions = false,
  refetchPosts = () => {}
}) => {

  const {user} = useUser()

  const [postUser, setPostUser] = useState<UserType | null>(null);
  const [showEditPopup, setShowEditPopup] = useState<string | null>(null)
  const [showDeletPopup, setShowDeletePopup] = useState<string | null>(null)
  const [showMenuPopup, setShowMenuPopup] = useState<string | null>(null)

  useEffect(() => {
    fetchUserData();
  }, [])

  const menuItems = [
    {
      id: 1,
      title: 'Edit',
      icon: <AiOutlineEdit size={20} />,
      action: () => toggleEditPopup(post._id),
      disabled: post.user !== user._id
    },
    {
      id: 2,
      title: 'Delete',
      icon: <AiOutlineDelete size={20} />,
      action: () => toggleDeletePopup(post._id),
      disabled: false
    }
  ]


  const fetchUserData = async () => {
    try {
      const response: any = await getUser(post.user);
      const userData = response.user;
      setPostUser(userData)
    } catch (error: any) {
      toast.error(error.message, {
        autoClose: 3500,
        pauseOnHover: true
      })
    }
  }

  const toggleEditPopup = (postId?: string) => {
    if (postId) {
      setShowEditPopup(postId)
      toggleMenuPopup()
    } else {
      setShowEditPopup(null)
    }
  }

  const toggleDeletePopup = (postId?: string) => {
    if (postId) {
      setShowDeletePopup(postId)
      toggleMenuPopup()
    } else {
      setShowDeletePopup(null)
    }
  }

  const toggleMenuPopup = (postId?: string) => {
    if (postId) {
      setShowMenuPopup(postId)
    } else {
      setShowMenuPopup(null)
    }
  }

  const handleDeletePost = async () => {
    try {
      const res: any = await deletePost(post._id, user._id)
      await refetchPosts()
      toast.success(res.message, {
        autoClose: 3500,
        pauseOnHover: true
      })
      toggleMenuPopup()
      toggleDeletePopup()
      
    } catch (error: any) {
      toast.error(error.message, {
        autoClose: 3500,
        pauseOnHover: true
      })
    }
  }

  return (
    <PostCardUI
      post={post}
      postUser={postUser}
      actions={actions}
      shouldEdit={showEditPopup}
      shouldDelete={showDeletPopup}
      toggleEditPopup={toggleEditPopup}
      toggleDeletePopup={toggleDeletePopup}
      toggleMenuPopup={toggleMenuPopup}
      showMenu={showMenuPopup}
      menuItems={menuItems}
      handleDeletePost={handleDeletePost}
      refetchPosts={refetchPosts} />
  )
}

export default PostCard