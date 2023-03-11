import React, { useEffect, useState } from 'react'
import { searchPosts } from '../../../../api/post.api';
import { toast } from 'react-toastify'
import PostsListUI from './PostsListUI';
import { useUser } from '../../../../contexts/UserContext';

const PostsList = () => {

  const [posts, setPosts] = useState([])
  const [pageNum, setPageNum] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [allFetched, setAllFetched] = useState(false)

  const {user} = useUser();
  

  useEffect(() => {
    fetchAllPosts()
  }, [])


  const fetchAllPosts = async () => {
    setLoading(true)
    try {
      const data: any = await searchPosts(undefined, user._id)
      setPosts(data.posts)
      if(data.total >= data.posts.length) setAllFetched(true)
      setPageNum(pageNum + 1)
      setLoading(false)
    } catch (error: any) {
      toast.error(error.message, {
        autoClose: 3500,
        pauseOnHover: true
      })
      setLoading(false)
    }
  }

  const loadMorePosts = async () => {
    try {
      const data: any = await searchPosts(undefined, user._id)
      const newPosts = posts.concat(data.posts)
      if(data.total >= newPosts.length) setAllFetched(true)
      setPosts(newPosts)
      setPageNum(pageNum + 1)
    } catch (error: any) {
      toast.error(error.message, {
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
      loading={loading}
      allFetched={allFetched} />
  )
}

export default PostsList