import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --color-white: #FFFFFF;
    --color-primary: #476EE6;
    --color-black: #030303;
    --color-black-2: #000000;
    --gray-600: #7D7D7D;
    --gray-500:#808080;
    --gray-400:#787486;
    --gray-300:#3C3C43;
    --gray-200:#A0A0A0;
    --color-border: #D7D7D7;
    --color-border-2:#E4E4EF;
    --color-error: #EA0000; 
    --color-success: #168821;
    --color-warning: #FFCD07;
    --color-information: #155BCB;
    font-size: 60%;   
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body{
    transition: 0.8s ease;
    animation: smoothShow 800ms;
  }
  
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body, input, button, textarea{
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  h2 {
    color: #476EE6;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.72px;
  }
  ul {
    list-style: none;
  }
  button {
    border: none;
    cursor: pointer;
  }
  button:hover{
    filter: brightness(0.9);
  }
  .errors{
    color: var(--color-error);
  }

  @keyframes smoothShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`;
