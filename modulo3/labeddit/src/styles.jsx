import { createGlobalStyle } from "styled-components";

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
    }

    button:hover {
        transform: scale(1.02);
    }

    label {
        cursor: pointer;
    }

`