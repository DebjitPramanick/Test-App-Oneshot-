import styled from "styled-components";

export const AuthPageLayout = styled.div`
    display: flex;
    height: 100vh;

    .auth-form-section {
        padding: 16px;
        flex-basis: 50%;
    }

    .auth-image-section {
        flex-basis: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #aefbff;

        img{
            width: 80%;
            height: max-content;
        }

        @media(max-width: 800px) {
            display: none;
        }
    }

    @media(max-width: 800px) {
        flex-direction: column;
    }
`

export const PageLayout = styled.div`
    margin: 70px auto;
    max-width: 900px;
    min-height: calc(100vh - 140px);

    @media(max-width: 900px) {
        margin: 70px 16px;
    }
`

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    column-gap: 16px
`