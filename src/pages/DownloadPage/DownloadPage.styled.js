// src/pages/DownloadPage/DownloadPage.styled.js
import styled from "styled-components";
import theme from "../../styles/Theme";

// ── Hero ─────────────────────────────────────────────────────
export const HeroSection = styled.section`
  padding: 0 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Banner = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  object-position: center;
  border-radius: 0 0 32px 32px;
  display: block;

  ${theme.media.tablet} {
    height: 280px;
  }

  ${theme.media.mobile} {
    height: 240px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.62) 100%
  );
  border-radius: 0 0 32px 32px;
  z-index: 1;
`;

export const Content = styled.div`
  position: absolute;
  z-index: 2;
  color: #fff;
  text-align: center;
  padding: 0 24px;
  max-width: 640px;
`;

export const Eyebrow = styled.p`
  font-size: ${theme.font.size.sm};
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 10px;

  ${theme.media.mobile} {
    font-size: 11px;
  }
`;

export const Heading = styled.h1`
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 12px;
  color: #fff;
`;

export const SubHeading = styled.p`
  font-size: clamp(0.875rem, 2vw, 1rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin: 0;

  ${theme.media.mobile} {
    display: none;
  }
`;

// ── Section ───────────────────────────────────────────────────
export const Section = styled.section``;

export const SectionHeader = styled.div`
  margin-bottom: 40px;

  ${theme.media.mobile} {
    margin-bottom: 28px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 700;
  color: ${theme.color.primaryLight};
  margin: 0 0 8px;
`;

export const SectionSub = styled.p`
  font-size: ${theme.font.size.sm};
  color: ${theme.color.gray?.[500] ?? "#5b606b"};
  margin: 0;
  line-height: 1.6;
`;

// CARDS GRID
export const Grid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  ${theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const Card = styled.li`
  background: #fff;
  border: 1px solid ${theme.color.gray?.[100] ?? "#f3f4f6"};
  border-radius: 16px;
  padding: 28px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  transition:
    box-shadow 0.25s ease,
    transform 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
    border-color: ${theme.color.success}55;
  }

  ${theme.media.mobile} {
    padding: 20px 18px 18px;
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconWrap = styled.span`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${theme.color.success}18;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${theme.color.success};
`;

export const CardTitle = styled.h3`
  font-size: ${theme.font.size.base};
  font-weight: 700;
  color: ${theme.color.primaryLight};
  margin: 0;
  line-height: 1.3;
`;

export const CardDesc = styled.p`
  font-size: ${theme.font.size.sm};
  color: ${theme.color.gray?.[500] ?? "#6b7280"};
  line-height: 1.65;
  margin: 0;
  flex: 1;
`;

export const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 4px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${theme.color.primary};
  color: #fff;
  font-size: ${theme.font.size.sm};
  font-weight: 600;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
  align-self: flex-start;

  &:hover {
    background-color: ${theme.color.success};
    box-shadow: 0 4px 14px ${theme.color.success}44;
    transform: translateY(-1px);
    color: white;
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  /* Full-width on mobile for easier tap */
  ${theme.media.mobile} {
    align-self: stretch;
    justify-content: center;
  }
`;
