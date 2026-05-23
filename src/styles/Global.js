import { createGlobalStyle } from "styled-components";
import theme from "./Theme";

const GlobalStyle = createGlobalStyle`

  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: ${theme.font.family.body};
    line-height: 1.6;
    color: ${theme.color.primary};
    background: ${theme.color.background};
    line-height: 1.5;
  }


  body {
    max-width: 1440px;
    margin: 0 auto;
    scroll-behavior: smooth;
  }

  section {
    width: 100%;
    padding: 112px 65px 80px;

    ${theme.media.tablet} {
      padding: 80px 20px 50px;
    }

    ${theme.media.mobile} {
      padding: 80px 20px 50px;
    }
  }

  code {
    font-family: "Poppins", sans-serif;
  }

  p, h1, h2, h3, h4, h5, h6, span, div {
    user-select: text;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  button {
    border: none;
    background-color: ${theme.color.transparent};
  }

  svg, img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.color.gray[200]};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.color.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.primaryDark};
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  button, a {
    transition: all 0.3s ease;
  }

  button:focus-visible,
  a:focus-visible {
    outline: 2px solid ${theme.color.primaryAccent};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export default GlobalStyle;
