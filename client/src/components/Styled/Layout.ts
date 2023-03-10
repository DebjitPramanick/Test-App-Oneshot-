import styled from "styled-components";

export const AuthPageLayout = styled.div`
    display: flex;
    height: 100vh;
`

export const PageLayout = styled.div`
    margin: 70px auto;
    max-width: 900px;
    min-height: calc(100vh - 140px);

    @media(max-width: 900px) {
        margin: 70px 16px;
    }
`