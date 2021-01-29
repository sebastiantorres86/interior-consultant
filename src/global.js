import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    max-width: 1440px;

    @media only screen and (min-width: 768px) {
      width: 1440px;
    }
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    text-rendering: optimizeLegibility;
    background: #181719;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  h1 {
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    margin: 0 0 25px;
    line-height: 46px;
    /* identical to box height */

  color: #FFFFFF;
    @media only screen and (min-width: 768px) {
      margin: 0 0 40px;
      font-size: 48px;
      line-height: 61px;
      margin: 0 0 40px;
    }
  }

  h2 {
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;

    color: #FFFFFF;

    @media only screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 31px;
    }
  }

  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-top: 0;
    margin-bottom: 4px;

    color: #FFFFFF;

    @media only screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 17px;
    }
  }

  small {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    /* Gray 3 */

    color: #828282;

    @media only screen and (min-width: 768px) {
      font-size: 12px;
      line-height: 15px;
    }
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    width: 60%;
    margin-bottom: 25px;

    color: #FFFFFF;

    @media only screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 48px;
      width: 100%;
    }
  }

  hr {
    width: 261px;

    @media only screen and (min-width: 768px) {
      display: none;
  }
}
`;
