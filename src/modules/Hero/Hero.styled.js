import styled from "styled-components";
import { heroData } from "../../data/heroData";
import theme from "../../styles/Theme";

export const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  background: url(${heroData.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  height: 100vh;
`;

export const Overlay1 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Overlay2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 128, 0, 0.5) 0%,
    transparent 50%,
    transparent 100%
  );
`;

export const Content = styled.div`
  position: relative;
  z-index: 5;
  color: white;
  text-align: center;
  padding-top: 150px;

  h1,
  h2 {
    line-height: 1;
    margin: 0;
  }
`;

export const Heading = styled.h1`
  font-size: ${theme.font.size["2xl"]};
  font-weight: normal;
`;

export const Subheading = styled.h2`
  font-size: 50px;
`;

export const Container = styled.div`
  margin: 20px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
