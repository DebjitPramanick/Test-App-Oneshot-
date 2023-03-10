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

    @media(max-width: 900px) {
        padding: 0 16px;
    }
`

export const FloatingContainer = styled.div<{height: string}>`
    position: absolute;
    background: ${props => props.theme.background};
    top: 46px;
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
