import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background: url("/media/bg1.jpg") center center no-repeat;
        background-size: cover;
        width: 100vw;
        height: 100vh;
    }
`;