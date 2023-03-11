import React from 'react'
import { SearchContainer } from './styles'
import { AiOutlineSearch } from 'react-icons/ai';
import { Input } from '../Styled/Form';

interface PropsType {
    query: string,
    handleQuery: (val: string) => void;
    goToSearch: (key: string) => void
}

const SearchBoxUI: React.FC<PropsType> = ({
    query,
    handleQuery,
    goToSearch
}) => {
    return (
        <SearchContainer>
            <AiOutlineSearch size={20} />
            <Input placeholder='Search posts or users'
                style={{ outline: 0 }}
                value={query}
                onChange={(e) => handleQuery(e.target.value)}
                onKeyDown={(e) => goToSearch(e.key)} />
        </SearchContainer>
    )
}

export default SearchBoxUI