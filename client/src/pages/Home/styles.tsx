import styled from "styled-components";

export const CreatePostContainer = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 6px;
    margin: 10px 0;
    background: #fff;
    box-shadow: 0 0 10px #d2d2d2;

    .create-post-trigger {
        background: #f9f9f9;
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
        
        p {
            color: grey
        }
    }
`