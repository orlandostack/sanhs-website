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
  }

  body {
    scroll-behavior: smooth;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  p, h1, h2, h3, h4, h5, h6, span, div {
    user-select: text;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  svg, img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
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

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Container utility */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    html { font-size: 14px; }
    button, a { min-height: 44px; min-width: 44px; }
  }

  @media (max-width: 480px) {
    html { font-size: 13px; }
  }

  button, a, .nav-item {
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
