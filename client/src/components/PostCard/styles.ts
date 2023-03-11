import styled from "styled-components";

export const Card= styled.div`
    padding: 16px;
    border-radius: 6px;
    background: ${props => props.theme.background};
    box-shadow: 0 0 10px ${props => props.theme.shadow};
    margin-bottom: 16px;
    max-height: 300px;
    overflow: hidden;
    position: relative;
`