import { useState } from 'react'
import SearchBoxUI from './SearchBoxUI'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useMenu } from '../../contexts/MenuContext'

const SearchBox = () => {

    const params = useSearchParams()
    const queryString = params[0].get('query')
    const {toggleMenu} =  useMenu()

    const [query, setQuery] = useState(queryString || '')

    const navigate = useNavigate()

    const goToSearch = (key?: string, click?: boolean) => {
        if((key === 'Enter' || click) && query) {
            toggleMenu(false)
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