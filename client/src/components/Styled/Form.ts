import styled from "styled-components"

export const FormContainer = styled.div`
    width: 360px;
    margin: 16px;
    border-radius: 6px;
    padding: 20px 40px;
    background: ${(props: any) => props.theme.background};
    box-shadow: 0 0 10px ${(props: any) => props.theme.shadow};
`

export const Field = styled.div`
    margin-bottom: 20px;

    label {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 30px;
        margin-bottom: 14px;
        color: ${(props: any) => props.theme.subText}
    }
`

export const Input = styled.input`  
    padding: 10px 12px;
    border: 0;
    color: ${(props: any) => props.theme.text};
    background: ${(props: any) => props.theme.inputBG};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
`

export const TextArea = styled.textarea`  
    padding: 10px 12px;
    height: 100px;
    resize: none;
    border: 0;
    color: ${(props: any) => props.theme.text};
    background: ${(props: any) => props.theme.inputBG};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
`

export const Button = styled.button`
    outline: 0;
    width: 150px;
    height: 39px;
    border-radius: 4px;
    font-style: normal;
    font-size: 14px;
    line-height: 12px;
    letter-spacing: -0.02em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.buttonBorder};
    color: ${props => props.theme.text};
    transition: 0.5s;

    &:hover {
        background: ${props => props.theme.buttonHover};
        color: white
    }
`

export const SearchButton = styled.button`
    border: 0;
    outline: 0;
    border-radius: 4px;
    font-style: normal;
    font-size: 14px;
    line-height: 12px;
    letter-spacing: -0.02em;
    cursor: pointer;
    display: block;
    color: ${props => props.theme.text};
    background: transparent
`

export const GoogleButton = styled.button`
    outline: 0;
    width: 100%;
    height: 39px;
    border-radius: 4px;
    font-style: normal;
    font-size: 16px;
    line-height: 12px;
    letter-spacing: -0.02em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    gap: 10px;
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.buttonBorder};
    color: ${props => props.theme.text};
    transition: 0.5s;

    &:hover {
        background: ${props => props.theme.buttonHover};
        color: white
    }
`