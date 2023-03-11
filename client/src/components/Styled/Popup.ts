import styled from "styled-components";


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #00000029;
    z-index: 999;
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
        width: calc(100vw - 32px);
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

export const MenuPopupContainer = styled.div<{height: string, width?: string, top?: string}>`
    position: absolute;
    background: ${props => props.theme.background};
    top: ${props => props.top || '46px'};
    width: ${props => props.width || '300px'};
    right: 0;
    overflow: hidden;
    box-shadow: 0 0 10px ${props => props.theme.floatingShadow};
    border-radius: 4px;
    z-index: 99;

    &.expand{
        height: ${(props: any) => props.height};
        transition: 0.5s;

        @media(max-width: 600px){
            height: 100vh !important;
            box-shadow: none;
            width: 100%;
        }
    }

    &.collapse{
        height: 0;
        transition: 0.5s;

        @media(max-width: 600px){
            box-shadow: none;
            width: 100%;
        }
    }
`

export const MenuPopupBody = styled.div`
    padding: 10px 10px;
`
export const MenuPopupItem = styled.div`
    display:flex;
    align-items: center;
    gap: 10px;
    padding: 10px 8px;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme.inputBG};
        border-radius: 4px;

        @media(max-width: 600px){
            background: transparent;
        }
    }

    &.disabled{
        color: ${props => props.theme.subText}
    }

    &.mobile-only{
        display: none;
        @media(max-width: 600px){
            display: flex;
        }
    }
`
