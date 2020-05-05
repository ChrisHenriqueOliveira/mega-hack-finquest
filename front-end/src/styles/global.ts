import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/bg.png';

export default createGlobalStyle`
    * {
        @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap');
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #f0f0f5 url(${githubBackground});
        background-size: cover;
        -webkit-font-smoothing: antialiased;
        height: 100%;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #root {
        width: 100%;
        height: 100%
    }

    button {
        cursor: pointer;
    }

    .linkStyle {
        text-decoration: none;
        color: black;
    }
`;
