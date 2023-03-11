import styled from "styled-components";

export const HeaderContaier = styled.div`
    position: fixed;
    height: 60px;
    top: 0;
    right: 0;
    left: 0;
    background: ${props => props.theme.background};
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
`

export const HeaderContent = styled.div`
    width: 900px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    position: relative;

    @media(max-width: 900px) {
        padding: 0 16px;
    }
`
