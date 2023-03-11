import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { updatePost, createPost } from '../../../api/post.api';
import { useUser } from '../../../contexts/UserContext';
import PostFormPopupUI from './PostFormPopupUI';

interface PropsType {
  closePopup: () => void,
  refetchPosts: () => void,
  heading?: string,
  post?: any
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

const PostFormPopup: React.FC<PropsType> = ({
  closePopup,
  refetchPosts,
  post,
  heading
}) => {

  const [uploading, setUploading] = useState(false);
  const [postData, setPostData] = useState<PostData>(post || initialPost)
  const { user } = useUser()

  const uploadPostData = async () => {
    if(postData.title === '' || postData.content === '') {
      toast.warning("Please fill the details", {
        autoClose: 3500,
        pauseOnHover: true
      })
      return;
    }
    setUploading(true)
    try {
      const data = { ...postData, user: user._id }
      const res: any = await createPost(data);
      await refetchPosts()
      setUploading(false)
      closePopup()
      toast.success(res.message, {
        autoClose: 3500,
        pauseOnHover: true
      })
    } catch (err: any) {
      toast.error(err.message, {
        autoClose: 3500,
        pauseOnHover: true
      })
      closePopup()
      setUploading(false)
    }
  }

  const editPostData = async () => {
    if(!postData.title.trim().length || !postData.content.trim().length) {
      toast.warning("Please fill the details", {
        autoClose: 3500,
        pauseOnHover: true
      })
      return;
    }
    setUploading(true)
    try {
      const data = { title: postData.title, content: postData.content }
      const res: any = await updatePost(post._id, user._id, data);
      await refetchPosts()
      setUploading(false)
      closePopup()
      toast.success(res.message, {
        autoClose: 3500,
        pauseOnHover: true
      })
    } catch (err: any) {
      toast.error(err.message, {
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
    <PostFormPopupUI
      closePopup={closePopup}
      handlePostData={handlePostData}
      post={postData}
      uploadPostData={uploadPostData}
      editPostData={editPostData}
      uploading={uploading}
      heading={heading}
    />
  )
}

export default PostFormPopup