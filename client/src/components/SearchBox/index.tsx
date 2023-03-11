import React, { useState } from 'react'
import SearchBoxUI from './SearchBoxUI'
import { useNavigate, useSearchParams } from 'react-router-dom'

const SearchBox = () => {

    const params = useSearchParams()
    const queryString = params[0].get('query')

    const [query, setQuery] = useState(queryString || '')

    const navigate = useNavigate()

    const goToSearch = (key: string) => {
        if(key === 'Enter' && query) {
            navigate(`/search?query=${query}`)
        }
    }

    return (
        <SearchBoxUI
            query={query}
            handleQuery={(val) => setQuery(val)}
            goToSearch={goToSearch} />
    )
}

export default SearchBox