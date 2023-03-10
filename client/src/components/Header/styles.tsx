import styled from "styled-components";

export const HeaderContaier = styled.div`
    position: fixed;
    height: 97px;
    top: 0;
    right: 0;
    left: 0;
    background: ${props => props.theme.headerBackground};
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;

    @media(max-width: 900px) {
        height: 70px;
    }
`

export const HeaderContent = styled.div`
    width:1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    .header-search-container {
        @media(max-width: 500px) {
            display: none;
        }
    }

    .mobile-icons {
        display: none;
        
        .mobile-menu-icon {
            display: none;
            @media(max-width: 1042px) {
                display: block;
            }
        }

        .mobile-search-icon {
            display: none;
            @media(max-width: 500px) {
                display: block;
            }
        }

        @media(max-width: 1042px) {
            display: flex;
        }
    }

    @media(max-width: 1210px) {
        width: calc(100% - 32px);
    }

    
`

export const FloatingContainer = styled.div<{height: string}>`
    position: absolute;
    background: ${props => props.theme.headerBackground};
    top: 70px;
    left: 0;
    right: 0;
    overflow: hidden;
    padding: 0 16px;

    &.expand{
        height: ${(props: any) => props.height};
        transition: 0.5s;
    }

    &.collapse{
        height: 0;
        transition: 0.5s;
    }
`

export const PageLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    a {
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        color: ${props => props.theme.headerText};
        text-decoration: none;
    }

    &.mobile {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        @media(max-width: 1000px) {
            display: flex;
        }
    }

    @media(max-width: 1042px) {
        display: none;
    }
`

export const ThemeController = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    p{
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        color: ${props => props.theme.headerText};
        text-decoration: none;
        white-space: nowrap;
    }

    &.mobile {
        justify-content: space-between;
        margin-top: 20px;

        @media(max-width: 1000px) {
            display: flex;
        }
    }

    @media(max-width: 1042px) {
        display: none;
    }
`