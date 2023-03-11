import React from 'react'
import { SearchContainer } from './styles'
import { AiOutlineSearch } from 'react-icons/ai';
import { Input, SearchButton } from '../Styled/Form';
interface PropsType {
    query: string,
    handleQuery: (val: string) => void;
    goToSearch: (key?: string, click?: boolean) => void
}

const SearchBoxUI: React.FC<PropsType> = ({
    query,
    handleQuery,
    goToSearch
}) => {
    return (
        <SearchContainer>
            <Input placeholder='Search posts or users'
                style={{ outline: 0 }}
                value={query}
                onChange={(e) => handleQuery(e.target.value)}
                onKeyDown={(e) => goToSearch(e.key)} />
            <SearchButton onClick={() => goToSearch(undefined, true)}>
                <AiOutlineSearch size={20} />
            </SearchButton>
        </SearchContainer>
    )
}

export default SearchBoxUI