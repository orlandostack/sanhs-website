export const media = {
  mobile: "@media only screen and (max-width: 767px)",
  tablet: "@media only screen and (min-width: 768px) and (max-width: 1279px)",
  desktop: "@media only screen and (min-width: 1280px)",
};

export const color = {
  transparent: "transparent",
  white: "#ffffff",
  black: "#111111",

  primary: "#007C00",
  primaryLight: "#145b2a",
  primaryDark: "#062110",
  primaryAccent: "#25810dff",


  gray: {
    100: "#f2f5f2",
    200: "#e3e7e3",
    300: "#cfd6cf",
    400: "#b9c1b9",
    500: "#8d998d",
    600: "#A9A9A9",
    700: "#505c50",
    800: "#2f3a2f",
    900: "#1c221c",
  },

  background: "#ffffff",
  section: "#EFFFEF",
  surface: "#f9fdf9",

  warning: "#fbbf24",
  danger: "#ef4444",
  info: "#3b82f6",
  success: "#16a34a",
};

export const shadow = {
  thin: "0 2px 4px rgba(0, 0, 0, 0.05)",
  soft: "1px 1px 5px 1px rgba(0, 0, 0, 0.07)",
  medium: "0 8px 25px rgba(0, 0, 0, 0.12)",
  large: "0 20px 40px rgba(0, 0, 0, 0.15)",
};

export const radius = {
  sm: "6px",
  md: "10px",
  lg: "16px",
  xl: "30px",
  full: "100%",
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
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
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

  heading: {
    h1: "52px",
    h2: "36px",
    h3: "22px"
  }
};

export const theme = {
  media,
  color,
  shadow,
  radius,
  spacing,
  font,
};

export default theme;
