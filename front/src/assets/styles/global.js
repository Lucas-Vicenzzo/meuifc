import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;

    }

    body {
        background-color: ${({ theme }) => theme.backgroundColor};
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: ${({ theme }) => theme.textColor};
    }
    button {
        cursor: pointer;
    }

    .leaflet-container {
        height: 90vh;
        width: 90vw;
        margin: 0 auto;
    }
    `;
