import styled from "styled-components"

export const Avatar = styled.div<{src: string, width: number}>`
    width: ${(props: any) => props.width}px;
    height: ${(props: any) => props.width}px;
    border-radius: 100%;
    background: url(${(props: any) => props.src});
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