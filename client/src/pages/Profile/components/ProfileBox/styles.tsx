import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 6px;
    background: ${props => props.theme.background};
    box-shadow: 0 0 10px ${props => props.theme.shadow};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    width: 260px;
    padding: 16px;
    position: fixed;

    @media(max-width: 700px) {
        position: relative;
        width: 100%;
    }
`