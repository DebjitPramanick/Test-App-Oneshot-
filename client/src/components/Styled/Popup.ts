import styled from "styled-components";


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #00000029;
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