import styled, { createGlobalStyle } from 'styled-components';
import { bgColor, secondaryColor } from './colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${bgColor};
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    .App {
        height: 100%;
        overflow: hidden;
    }

    /* loader css  */
    .objectLoaderContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9;
}

.spinner {
    width: 40px;
    height: 40px;

    position: relative;
    margin: 100px auto;
}

.spinner {
    width: 40px;
    height: 40px;

    position: relative;
    margin: 100px auto;
}

.double-bounce1,
.double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${secondaryColor};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
    animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {

    0%,
    100% {
        -webkit-transform: scale(0.0)
    }

    50% {
        -webkit-transform: scale(1.0)
    }
}

@keyframes sk-bounce {

    0%,
    100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
    }

    50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
    }
}
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`;
