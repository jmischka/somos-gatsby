import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `

html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
*, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 10px;
    color: #262626;
}

header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    padding: 0 0 12px 0;
    text-align: center;
    background-color: rgba(255,255,255,.7);
    z-index: 100;
}

section {
    position: relative;
    margin: 0 0 0 0;
    width: 100%;
    height: auto;
    min-height: 100vh;
}

div.section-container {
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    top: 0;
    left: 0;
    margin: 0 0 0 0;
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: #FFFFFF;
    box-shadow: 0 5px 10px rgba(0,0,0,.15);
}

div.section-container.dark-theme {
    display: block;
    background-color: #262626;
}

footer {
    position: relative;
    margin: 0 0 0 0;
    display flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 12px;
    background-color: white;
}

a {
    position: relative;
    color: #F15D22;
    text-decoration: none;
    transition-duration: .35s;
}

a:hover {
    color: #00567D;
    text-decoration: underline;
}

.sr-only {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  
  .sr-only.focusable:active,
  .sr-only.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: inherit;
    width: auto;
  }
`;

export default GlobalStyles;