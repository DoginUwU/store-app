import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        background-color: #fff;
        margin: 0 0 0 11em;
        position: relative;
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background: #ccc;
    }
    ::-webkit-scrollbar-track {
        background: #FFF;
        border-radius: 10px;
        box-shadow: inset 7px 10px 12px 0px #FFF;
    }
`;

export default GlobalStyle;
