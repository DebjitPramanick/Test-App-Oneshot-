import styled from 'styled-components'

export const BoxContainer = styled.div`
    background: ${props => props.theme.background};
    border-radius: 6px;
    height: fit-content;
    width: 350px;
    padding: 16px;
    box-shadow:  0 0 10px ${props => props.theme.shadow}
`