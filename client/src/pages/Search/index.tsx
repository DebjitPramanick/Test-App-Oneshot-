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
        if(!query) return;
        setFetching(true)
        try {
            const resUsers: any = await searchUsers(query)
            const resPosts: any = await searchPosts(query)
            setResults({ users: resUsers.users, posts: resPosts.posts })
            setFetching(false)
        } catch (error: any) {
            toast.error(error.message, {
                autoClose: 3500,
                pauseOnHover: true
            })
            setFetching(false)
        }
    }

    console.log(results)

    return (
        <SearchUI
            tabs={tabs}
            activeTab={currentTab}
            selectTab={(num) => setCurrentTab(num)}
            results={results}
            fetching={fetching} />
    )
}

export default Search