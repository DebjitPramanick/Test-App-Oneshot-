import styled from "styled-components"

export const Avatar = styled.div<{src: string, width: number, border?: number}>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.width}px;
    border-radius: 100%;
    border: ${(props) => props.border || 0}px solid ${(props) => props.theme.buttonBorder};
    background: url(${(props) => props.src});
    flex: none;
    order: 0;
    flex-grow: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
`