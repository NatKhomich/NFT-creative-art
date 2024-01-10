import {createGlobalStyle} from 'styled-components';
import {theme} from './Theme';
import bgImage from '../assets/images/bg.webp'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    line-height: 1.2;

    background-image: linear-gradient(${theme.colors.primaryBg} 0%,${
            theme.colors.primaryBg
    } 100%), url("${bgImage}");
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.font}
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background-color: unset;
    cursor: pointer;
    color: ${theme.colors.font}
  }
  
`