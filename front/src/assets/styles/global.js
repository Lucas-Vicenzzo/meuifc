import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;

    }

    #root {
        width: 100%;
    }

    body {
        background-color: ${({ theme }) => theme.backgroundColor};
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: ${({ theme }) => theme.textColor};
        gap: 20px;
        width: 100%;
        height: 100vh;
        max-height: 100vh;

    }
    button {
        cursor: pointer;
    }

    .leaflet-container {
        height: 100%;
        flex: 1;
        width: 100%;
        margin: 0 auto;
        position: absolute;
        /* mix-blend-mode: luminosity;
        box-sizing: border-box;
        filter: invert(100%); */
        background-color: #23283a;

    }
`;
