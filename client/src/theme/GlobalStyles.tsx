import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  *{
    transition: all 0.50s linear;
  }
  body {
    background: ${({ theme }: any) => theme.body};
    color: ${({ theme }: any) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    overflow-x: hidden;
  }
`