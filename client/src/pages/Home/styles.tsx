import styled from "styled-components";

export const CreatePostContainer = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 6px;
    margin: 10px 0;
    background: ${props => props.theme.background};
    box-shadow: 0 0 10px ${props => props.theme.shadow};

    .create-post-trigger {
        background: ${props => props.theme.inputBG};
        width: 100%;
        padding: 10px 16px;
        border-radius: 4px;
        cursor: pointer;
        
        p {
            color: ${props => props.theme.subText}
        }
    }
`