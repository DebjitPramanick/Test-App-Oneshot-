import React, { useState, useEffect } from 'react'
import SearchUI from './SearchUI'
import { useSearchParams } from 'react-router-dom'
import { searchUsers } from '../../api/user.api'
import { searchPosts } from '../../api/post.api'
import { toast } from 'react-toastify'

const Search = () => {
    const [currentTab, setCurrentTab] = useState(1)
    const [fetching, setFetching] = useState(false)
    const [results, setResults] = useState({
        users: [],
        posts: []
    })
    const [pageNum, setPageNum] = useState<{
        users: number, 
        posts: number}
    >({
        users: 1,
        posts: 1
    });
    const [allFetched, setAllFetched] = useState<{
        users: boolean, 
        posts: boolean}
    >({
        users: false,
        posts: false
    })

    const params = useSearchParams()
    const query = params[0].get('query')

    useEffect(() => {
        searchQuery()
    }, [query])


    const tabs = [
        {
            id: 1,
            name: 'Posts'
        },
        {
            id: 2,
            name: 'Users'
        },
    ]

    const searchQuery = async () => {
        if (!query) return;
        setFetching(true)
        try {
            const resUsers: any = await searchUsers(query)
            const resPosts: any = await searchPosts(query)
            setResults({ users: resUsers.users, posts: resPosts.posts })
            if(resPosts.posts.length >= resPosts.total) {
                setAllFetched({...allFetched, posts: true})
            }
            if(resUsers.users.length >= resUsers.total) {
                setAllFetched({...allFetched, users: true})
            }
            setPageNum({users: pageNum.users+1, posts: pageNum.posts+1})
            setFetching(false)
        } catch (error: any) {
            toast.error(error.message, {
                autoClose: 3500,
                pauseOnHover: true
            })
            setFetching(false)
        }
    }

    const loadMoreResults = async (type: 'users' | 'posts') => {
        if (!query) return;
        setFetching(true)
        try {
            if (type === 'posts') {
                const resPosts: any = await searchPosts(query, undefined, pageNum.posts)
                const newPosts = results.posts.concat(resPosts.posts)
                if (resPosts.total >= newPosts.length) setAllFetched({...allFetched, posts: true})
                setResults({...results, posts: newPosts})
                setPageNum({...pageNum, posts: pageNum.posts+1})
            } else {
                const resUsers: any = await searchUsers(query, pageNum.users)
                const newUsers = results.users.concat(resUsers.users)
                if (resUsers.total >= newUsers.length) setAllFetched({...allFetched, users: true})
                setResults({...results, users: newUsers})
                setPageNum({...pageNum, users: pageNum.users+1})
            }
            setFetching(false)
        } catch (error: any) {
            toast.error(error.message, {
                autoClose: 3500,
                pauseOnHover: true
            })
            setFetching(false)
        }
    }

    return (
        <SearchUI
            tabs={tabs}
            activeTab={currentTab}
            selectTab={(num) => setCurrentTab(num)}
            results={results}
            fetching={fetching}
            loadMoreResults={loadMoreResults}
            allFetched={allFetched} />
    )
}

export default Search