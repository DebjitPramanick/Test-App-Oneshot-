import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: any) => theme.body};
    color: ${({ theme }: any) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    overflow-x: hidden;
  }
`