import { useEffect, useState } from 'react'
import { getAllPosts } from '../../api/post.api'
import { toast } from 'react-toastify'
import HomeUI from './HomeUI'

const Home = () => {

  const [posts, setPosts] = useState([])
  const [pageNum, setPageNum] = useState<number>(1);
  const [loading, setLoading] = useState(false)
  const [showCreatePopUp, setShowCreatePopUp] = useState(false)
  const [allFetched, setAllFetched] = useState(false)

  useEffect(() => {
    fetchAllPosts()
  }, [])


  const fetchAllPosts = async () => {
    setLoading(true)
    try {
      const data: any= await getAllPosts()
      setPosts(data.posts)
      if(data.posts.length >= data.total) setAllFetched(true)
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
      if(newPosts.length >= data.total) setAllFetched(true)
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
    <HomeUI
      posts={posts}
      loadMorePosts={loadMorePosts}
      refetchPosts={fetchAllPosts}
      loading={loading}
      toggleCreatePopUp={() => setShowCreatePopUp(!showCreatePopUp)}
      showCreatePopUp={showCreatePopUp}
      allFetched={allFetched}
    />
  )
}

export default Home