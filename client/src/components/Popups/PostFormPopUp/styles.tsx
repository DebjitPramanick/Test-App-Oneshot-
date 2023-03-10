import styled from "styled-components";


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000000a8;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PopupContainer = styled.div`
    border-radius: 10px;
    position: relative;
    width: 500px;
    max-height: 450px;
    min-height: 200px;
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.border};

    @media(max-width: 900px) {
        width: calc(100vw - 52px);
        height: 80vh;
        border-radius: 10px;
    }
`

export const PopupBody = styled.div`
    overflow: hidden;
    height: 100%;
    border-radius: 15px;

    @media(max-width: 720px) {
        border-radius: 10px;
    }
`

export const PopupHeader = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.border};
    justify-content: space-between;
    padding: 16px;
`

export const ScrollContainer = styled.div`
    overflow-y: scroll;
    height: 100%;
`

export const ImageContainer = styled.div`
    
    display: flex;
    justify-content: center;
    position: relative;

    img {
        max-width: 100%;
        max-height: 600px;
        object-fit: cover;
    }
`

export const UserDetails = styled.div`
    margin-top: -4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    flex-grow: 0;
    padding: 25px;

    .name-para { 
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;

        color: ${props => props.theme.text};
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 130px;

        @media(max-width: 720px) {
            width: 100%;
        }
    }

    .username-para{
        font-style: italic;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: ${props => props.theme.subText};
        
        @media(max-width: 720px) {
            width: 100%;
        }
    }

    .downloads-text{
        font-style: normal;
        font-weight: 700;
        font-size: 14.1538px;
        line-height: 17px;
        color: #858484;
    }

    .like-count {
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #858484;
    }

    .user-info-part{
        @media(max-width: 720px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
        }
    }

    @media(max-width: 720px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`

export const SocialHandleContainer = styled.div`
    display: flex; 
    gap: 10px;
    marginLeft: 11px;

    .social-handle {
        font-style: italic;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #A7A7A7;
    }
`

export const TagsHeading = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: ${props => props.theme.text};
    margin: 33px 0 10px 25px;
`

export const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    padding: 15px 25px;

    .pic-tag{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 12px;
        gap: 10px;

        background: #ECECEC;
        border-radius: 4px;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        color: #4F4F4F;
        text-transform: capitalize;
    }
`

export const Options = styled.div`
    margin-top: -90px;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    background-image: linear-gradient(360deg, #000000cc, transparent);
    position: absolute;
    left: 0;
    right: 0;
`

