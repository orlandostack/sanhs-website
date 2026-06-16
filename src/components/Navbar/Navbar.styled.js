// src/components/Navbar/Navbar.styled.js
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/Theme";

// ── Animations ──────────────────────────────────────────────
const slideInItem = keyframes`
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
`;

// ── Shared link style mixin ──────────────────────────────────
const activeLinkMixin = css`
  color: ${theme.color.success};
  font-weight: 700;
`;

// ── Wrapper ──────────────────────────────────────────────────
export const NavbarWrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 65px;

  background-color: ${({ $scrolled }) =>
    $scrolled ? "rgba(255, 255, 255, 0.97)" : "transparent"};
  color: ${({ $scrolled }) =>
    $scrolled ? theme.color.primaryLight : theme.color.white};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none"};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(12px)" : "none")};
  transition:
    background-color 0.35s ease,
    box-shadow 0.35s ease,
    backdrop-filter 0.35s ease;

  ${theme.media.mobile} {
    padding: 10px 20px;
  }
`;

// ── Brand ────────────────────────────────────────────────────
export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  flex-shrink: 0;
`;

export const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
`;

export const Brand = styled.span`
  font-size: ${theme.font.size["3xl"]};
  font-weight: 500;
  color: ${({ $scrolled }) =>
    $scrolled ? theme.color.primaryLight : theme.color.white};
  transition: color 0.3s ease;
  letter-spacing: -0.3px;

  ${theme.media.mobile} {
    font-size: ${theme.font.size["2xl"]};
  }
`;

export const SubBrand = styled.span`
  font-size: ${theme.font.size.sm};
  font-weight: 400;
  color: ${({ $scrolled }) =>
    $scrolled
      ? (theme.color.gray?.[500] ?? "#6b7280")
      : "rgba(255,255,255,0.8)"};
  transition: color 0.3s ease;

  ${theme.media.mobile} {
    display: none;
  }
`;

export const Logo = styled.img`
  width: ${({ $size }) => $size ?? "60px"};
  height: auto;
  flex-shrink: 0;

  ${theme.media.mobile} {
    width: ${({ $size }) => $size ?? "44px"};
  }
`;

// ── Desktop Nav ──────────────────────────────────────────────
export const Navlinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  ${theme.media.tablet} {
    display: none;
  }
  ${theme.media.mobile} {
    display: none;
  }
`;

export const Navitem = styled.li`
  position: relative;

  a {
    cursor: pointer;
    font-size: ${theme.font.size.base};
    font-weight: 500;
    transition: color 0.25s ease;
    position: relative;
    padding: 6px 0;
    text-decoration: none;
    color: inherit;

    &:hover {
      color: ${theme.color.success};
    }

    &.active {
      color: ${({ $scrolled }) =>
        $scrolled ? theme.color.success : theme.color.white};
      font-weight: 700;

      &::after {
        transform: scaleX(1);
        transform-origin: bottom left;
        background-color: ${({ $scrolled }) =>
          $scrolled ? theme.color.success : theme.color.white};
      }
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background-color: ${theme.color.success};
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.25s ease;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

// ── Hamburger button ─────────────────────────────────────────
export const MenuButton = styled.button`
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.15)"};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: none;
  padding: 8px;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease;

  &:hover {
    background: ${({ $scrolled }) =>
      $scrolled ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.25)"};
  }

  ${theme.media.tablet} {
    display: flex;
  }
  ${theme.media.mobile} {
    display: flex;
  }
`;

export const HamburgerBox = styled.div`
  width: 20px;
  height: 14px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HamburgerLine = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: ${({ $scrolled }) =>
    $scrolled ? theme.color.black : theme.color.white};
  transition:
    transform 0.3s ease,
    opacity 0.3s ease,
    width 0.3s ease;
  transform-origin: center;

  ${({ $pos, $open }) =>
    $pos === "top" &&
    $open &&
    css`
      transform: translateY(6px) rotate(45deg);
    `}

  ${({ $pos, $open }) =>
    $pos === "mid" &&
    $open &&
    css`
      opacity: 0;
      transform: scaleX(0);
    `}

  ${({ $pos, $open }) =>
    $pos === "bot" &&
    $open &&
    css`
      transform: translateY(-6px) rotate(-45deg);
    `}

  /* Make middle line slightly shorter for a nice effect when closed */
  ${({ $pos }) =>
    $pos === "mid" &&
    css`
      width: 75%;
    `}
`;

// ── Overlay ──────────────────────────────────────────────────
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};
  transition: opacity 0.3s ease;
  z-index: 998;
`;

// ── Mobile Drawer ────────────────────────────────────────────
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100dvh;
  background: #fff;
  box-shadow: 8px 0 40px rgba(0, 0, 0, 0.15);
  border-radius: 0 20px 20px 0;
  z-index: 1000;

  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-110%)")};
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1);

  /* Only shown on tablet/mobile */
  ${theme.media.desktop} {
    display: none;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 20px 20px;
`;

export const DrawerBrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DrawerBrand = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: ${theme.color.primaryLight};
  letter-spacing: -0.3px;
`;

export const DrawerSubBrand = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: ${theme.color.gray?.[400] ?? "#9ca3af"};
  line-height: 1.3;
  max-width: 160px;
`;

export const DrawerDivider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.color.gray?.[100] ?? "#f3f4f6"};
  margin: 0 20px;
`;

export const DrawerLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 12px 12px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MobileItem = styled.li`
  border-radius: 12px;
  overflow: hidden;

  /* Staggered slide-in when menu opens */
  opacity: 0;
  animation: ${({ $open }) =>
    $open
      ? css`
          ${slideInItem} 0.35s ease forwards
        `
      : "none"};
  animation-delay: ${({ $index }) =>
    $index ? `${0.05 + $index * 0.05}s` : "0.05s"};

  /* Active background pill */
  background: ${({ $active }) =>
    $active ? `${theme.color.success}14` : "transparent"};
  transition: background 0.2s ease;

  &:hover {
    background: ${({ $active }) =>
      $active
        ? `${theme.color.success}20`
        : (theme.color.gray?.[50] ?? "#f9fafb")};
  }
`;

export const MobileItemInner = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 16px;
  border-left: 3px solid
    ${({ $active }) => ($active ? theme.color.success : "transparent")};
  border-radius: 0 12px 12px 0;
  transition: border-color 0.2s ease;

  a,
  button {
    cursor: pointer;
    font-size: 15px;
    font-weight: ${({ $active }) => ($active ? "700" : "500")};
    color: ${({ $active }) =>
      $active ? theme.color.success : (theme.color.primaryLight ?? "#1f2937")};
    text-decoration: none;
    transition: color 0.2s ease;
    display: block;
    width: 100%;

    &.active {
      ${activeLinkMixin}
    }
  }
`;

export const LinkIcon = styled.span`
  font-size: 18px;
  flex-shrink: 0;
  color: ${theme.color.gray?.[400] ?? "#9ca3af"};
  display: flex;
  align-items: center;
`;

export const DrawerFooter = styled.div`
  padding: 16px 20px 24px;
  border-top: 1px solid ${theme.color.gray?.[100] ?? "#f3f4f6"};
`;

export const DrawerFooterText = styled.p`
  font-size: 12px;
  color: ${theme.color.gray?.[400] ?? "#9ca3af"};
  margin: 0;
  text-align: center;
`;
