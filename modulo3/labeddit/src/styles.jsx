import styled, { createGlobalStyle } from "styled-components";
import { PrimaryGradient, PrimaryColor, TertiaryTextColor } from "./constants/Colors";

export const GlobalStyle = createGlobalStyle`
    *   {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
        width: 100%;
        min-width: 150px;
        height: 45px;
        margin: 5px auto;
    }
`

export const ButtonSign = styled.button`
    color: ${PrimaryColor};
    background: ${PrimaryGradient};
    border: none;
    border-radius: 27px;
`
export const ButtonSignUp = styled.button`
    color: ${TertiaryTextColor};
    background: ${PrimaryColor};
    border: 1px solid ${TertiaryTextColor};
    border-radius: 27px;
`
export const PageButton = styled.button`
    color: ${PrimaryColor};
    background: ${PrimaryGradient};
    border: none;
    border-radius: 12px;
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    margin: 5px auto;
    background: ${PrimaryGradient};
`
