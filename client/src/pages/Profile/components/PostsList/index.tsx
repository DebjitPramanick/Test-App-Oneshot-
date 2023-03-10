import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../../../../api/post.api';
import { toast } from 'react-toastify'
import PostsListUI from './PostsListUI';

const PostsList = () => {

  const [posts, setPosts] = useState([])
  const [pageNum, setPageNum] = useState<number>(1);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchAllPosts()
  }, [])


  const fetchAllPosts = async () => {
    setLoading(true)
    try {
      const data: any = await getAllPosts()
      setPosts(data.posts)
      setPageNum(pageNum + 1)
      setLoading(false)
    } catch (error) {
      toast.error("Error occurred!", {
        autoClose: 3500,
        pauseOnHover: true
      })
      console.log(error)
      setLoading(false)
    }
  }

  const loadMorePosts = async () => {
    try {
      const data: any = await getAllPosts(pageNum)
      const newPosts = posts.concat(data.posts)
      setPosts(newPosts)
      setPageNum(pageNum + 1)
    } catch (error) {
      toast.error("Error occurred!", {
        autoClose: 3500,
        pauseOnHover: true
      })
    }
  }

  return (
    <PostsListUI
      posts={posts}
      loadMorePosts={loadMorePosts}
      refetchPosts={fetchAllPosts}
      loading={loading} />
  )
}

export default PostsList