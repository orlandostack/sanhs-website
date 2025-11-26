export const breakpoint = {
  mobile: "only screen and (max-width: 768px)",
  tablet: "only screen and (min-width: 769px) and (max-width: 1024px)",
  desktop: "only screen and (min-width: 1025px)",
};

export const media = {
  mobile: `@media ${breakpoint.mobile}`,
  tablet: `@media ${breakpoint.tablet}`,
  desktop: `@media ${breakpoint.desktop}`,
};

export const color = {
  transparent: "transparent",
  white: "#ffffff",
  black: "#111111",

  primary: "#0e3b1d",
  primaryLight: "#145b2a",
  primaryDark: "#062110",
  primaryAccent: "#80c070",

  gray: {
    100: "#f2f5f2",
    200: "#e3e7e3",
    300: "#cfd6cf",
    400: "#b9c1b9",
    500: "#8d998d",
    600: "#697569",
    700: "#505c50",
    800: "#2f3a2f",
    900: "#1c221c",
  },

  background: "#ffffff",
  surface: "#f9fdf9",

  warning: "#fbbf24",
  danger: "#ef4444",
  info: "#3b82f6",
  success: "#16a34a",
};

export const shadow = {
  thin: "0 2px 4px rgba(0, 0, 0, 0.05)",
  soft: "0 4px 6px rgba(0, 0, 0, 0.07)",
  medium: "0 8px 25px rgba(0, 0, 0, 0.12)",
  large: "0 20px 40px rgba(0, 0, 0, 0.15)",
};

export const radius = {
  sm: "6px",
  md: "10px",
  lg: "16px",
  full: "999px",
};

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "32px",
};

export const font = {
  family: {
    body: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
  },
  size: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "22px",
    "3xl": "28px",
  },
};

export const theme = {
  breakpoint,
  media,
  color,
  shadow,
  radius,
  spacing,
  font,
};

export default theme;
