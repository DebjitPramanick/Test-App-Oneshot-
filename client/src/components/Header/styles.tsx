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
`

export const FloatingContainer = styled.div<{height: string}>`
    position: absolute;
    background: ${props => props.theme.background};
    top: 40px;
    width: 300px;
    right: 0;
    overflow: hidden;
    box-shadow: 0 0 10px  ${props => props.theme.floatingShadow};
    border-radius: 4px;

    &.expand{
        height: ${(props: any) => props.height};
        transition: 0.5s;
    }

    &.collapse{
        height: 0;
        transition: 0.5s;
    }

    .floating-container-content {
        padding: 16px;
    }
`