import React from 'react'
import { SearchContainer } from './styles'
import { AiOutlineSearch } from 'react-icons/ai';
import { Button, Input, SearchButton } from '../Styled/Form';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate()
    return (
        <SearchContainer>
            <Input placeholder='Search posts or users'
                style={{ outline: 0 }}
                value={query}
                onChange={(e) => handleQuery(e.target.value)}
                onKeyDown={() => goToSearch(query)} />
            <SearchButton onClick={() =>  navigate(`/search?query=${query}`)}>
                <AiOutlineSearch size={20} />
            </SearchButton>
        </SearchContainer>
    )
}

export default SearchBoxUI