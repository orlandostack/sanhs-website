import styled from "styled-components";
import theme from "../../styles/Theme";

export const NavbarWrapper = styled.nav`
  max-width: 1440px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 65px;
  background-color: ${({ $scrolled }) =>
    $scrolled ? theme.color.white : theme.color.transparent};
  color: ${({ $scrolled }) =>
    $scrolled ? theme.color.primaryLight : theme.color.white};
  box-shadow: ${({ $scrolled }) => ($scrolled ? theme.shadow.medium : "none")};
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  ${theme.media.mobile} {
    padding: 10px 20px;
  }
`;

export const Container = styled.div`
  display: ${({ $display }) => $display || "flex"};
  justify-content: ${({ $justify }) => $justify || "center"};
  align-items: ${({ $align }) => $align || "center"};
  gap: ${({ $gap }) => $gap || "0"};
  padding: ${({ $padding }) => $padding || "0"};
`;

export const Logo = styled.img`
  width: 70px;
  height: auto;
  margin: ${({ $margin }) => $margin || "0"};

  ${theme.media.mobile} {
    width: 50px;
  }
`;

export const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  h1,
  h2 {
    margin: 0;
    line-height: 1;
  }
`;

export const Brand = styled.h1`
  font-size: ${theme.font.size["3xl"]};

  ${theme.media.mobile} {
    font-size: ${theme.font.size["2xl"]};
  }
`;

export const SubBrand = styled.h2`
  font-size: ${theme.font.size.xl};
  font-weight: normal;

  ${theme.media.mobile} {
    display: none;
  }
`;

export const Navlinks = styled.ul`
  display: flex;
  gap: 2rem;

  ${theme.media.tablet} {
    display: none;
  }
  ${theme.media.mobile} {
    display: none;
  }
`;

export const Navitems = styled.li`
  position: relative;

  a {
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    padding: 5px 0;

    &:hover {
      color: ${theme.color.success};
      font-weight: 600;
    }

    &.active {
      color: ${({ $scrolled }) =>
    $scrolled ? theme.color.white : theme.color.success};
      font-weight: 600;

      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${({ $scrolled }) =>
    $scrolled ? theme.color.white : theme.color.success};
        transform: scaleX(1);
        transition: transform 0.3s ease;
      }
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ $active, $scrolled }) =>
    $active
      ? $scrolled
        ? theme.color.success
        : theme.color.white
      : theme.color.success};
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

/* MOBILE MENU ICON */
export const MenuButton = styled.button`
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  ${theme.media.tablet} {
    display: block;
  }
  ${theme.media.mobile} {
    display: block;
  }

  svg {
    color: ${({ $scrolled }) =>
    $scrolled ? theme.color.black : theme.color.white};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: hidden;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};

  transition: opacity 0.3s ease;

  z-index: 999;
`;

export const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  position: fixed;
  top: -20px;
  left: 0;
  width: 280px;
  height: 100vh;
  padding: 0 20px 0;
  border-radius: 0 1rem 1rem 0;
  color: ${theme.color.black};

  background: ${theme.color.white};
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.2);

  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-100%)")};

  transition: transform 0.35s ease-in-out;
  z-index: 998;

  ${theme.media.desktop} {
    display: none;
  }
`;

export const MobileItem = styled.li`
  position: relative;
  padding: 20px;
  font-size: 18px;
  border-bottom: 1px solid ${theme.color.gray[100]};
  width: 100%;

  a {
    cursor: pointer;
    display: block;
    width: 100%;
    position: relative;
    padding: 5px 0;
    transition: all 0.3s ease;

    /* Active link underline for mobile */
    &.active {
      color: ${theme.color.success};
      font-weight: 600;

      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${theme.color.success};
        transform: scaleX(1);
        transition: transform 0.3s ease;
      }
    }

    &:hover {
      color: ${theme.color.success};

      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${theme.color.success};
        transform: scaleX(1);
        transform-origin: bottom left;
        transition: transform 0.3s ease;
      }
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${theme.color.success};
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s ease;
    }
  }
`;
