import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}
body {
    background-color: #040714;
    color: #FFFFFF;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;

    @media(max-width: 800px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
body::before {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(#f00, #F0F);
    clip-path: circle(30% at right 70%)
}
body::after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(#f00, #F0F);
    clip-path: circle(30% at left 0%)
}
`;

export default GlobalStyle;
