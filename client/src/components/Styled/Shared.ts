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
    cursor: pointer;
    position: relative;
`
export const Flex = styled.div`
    display: flex;
    align-items: center;
`

export const AdminTag = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background: #ab24ff;
    width: fit-content;
    padding: 6px 10px;
    border-radius: 50px;
    font-size: 12px;
    color: #fff;
`

export const AvatarAdminBadge = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background: #ab24ff;
    width: 22px;
    height: 22px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`

