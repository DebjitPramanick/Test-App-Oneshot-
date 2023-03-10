import styled from "styled-components";

export const AuthPageLayout = styled.div`
    display: flex;
    height: 100vh;

    .form-section {
        padding: 16px;
        flex-basis: 50%;
    }

    .image-section {
        flex-basis: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #9ad0ff;

        img{
            width: 80%;
            height: max-content;
        }
    }

    @media(max-width: 800px) {
        flex-direction: column;
    }
`

export const PageLayout = styled.div`
    margin: 97px auto;
    max-width: 1200px;

    @media(max-width: 900px) {
        margin: 70px auto;
    }
`