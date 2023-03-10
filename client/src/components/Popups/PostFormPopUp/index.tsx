import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { createPost } from '../../../api/post.api';
import { useUser } from '../../../contexts/UserContext';
import PostFormPopUpUI from './PostFormPopUpUI';

interface PropsType {
  closePopup: () => void,
  refetchPosts: () => void
}

interface PostData {
  title: string,
  content: string,
  user: string
}

const initialPost = {
  title: '',
  content: '',
  user: ''
}

const PostFormPopUp: React.FC<PropsType> = ({ closePopup, refetchPosts }) => {

  const [uploading, setUploading] = useState(false);
  const [postData, setPostData] = useState<PostData>(initialPost)
  const { user } = useUser()

  const uploadPostData = async () => {
    setUploading(true)
    try {
      const data = { ...postData, user: user._id }
      await createPost(data);
      await refetchPosts()
      setUploading(false)
      closePopup()
    } catch (err: any) {
      toast.error("Error occurred!", {
        autoClose: 3500,
        pauseOnHover: true
      })
      closePopup()
      setUploading(false)
    }
  }

  const handlePostData = (val: string, field: 'title' | 'content') => {
    const newData = { ...postData, [field]: val }
    setPostData(newData)
  }

  return (
    <PostFormPopUpUI
      closePopup={closePopup}
      handlePostData={handlePostData}
      post={postData}
      uploadPostData={uploadPostData}
      uploading={uploading}
    />
  )
}

export default PostFormPopUp