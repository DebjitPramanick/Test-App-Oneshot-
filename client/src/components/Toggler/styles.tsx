import styled from "styled-components";

export const ToggleContainer = styled.div`
    display: flex;
    padding: 4px;
    border-radius: 6px;
    gap: 4px;
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.border};
    margin-bottom: 16px;
`

export const Tab = styled.div`
    border-radius: 6px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;

    &.active{
        background: ${props => props.theme.toggleBG};
        color: ${props => props.theme.toggleColor};
    }
`