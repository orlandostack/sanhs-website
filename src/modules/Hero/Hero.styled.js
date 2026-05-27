import styled from "styled-components";
import { heroData } from "../../data/heroData";
import theme from "../../styles/Theme";

export const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 182px;
  height: 500px;

  ${theme.media.tablet} {
    padding-top: 120px;
  }

  ${theme.media.mobile} {
    padding-top: 120px;
  }
`;

export const Background = styled.div`
  position: absolute;
  inset: 0;
  background: url(${heroData.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 0 0 1rem 1rem;
  overflow: hidden;
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
    rgba(0, 60, 0, 0.5) 0%,
    transparent 50%,
    transparent 100%
  );

  ${theme.media.mobile} {
    background: linear-gradient(
      to top,
      rgba(0, 60, 0, 0.5) 0%,
      transparent 100%
    );
  }
`;

export const Content = styled.div`
  position: relative;
  color: white;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 50px;
  font-weight: 600;

  ${theme.media.mobile} {
    font-size: ${theme.font.size["3xl"]};
  }
`;

export const Subheading = styled.p`
  font-size: ${theme.font.size.base};
  font-weight: normal;
`;

export const Container = styled.div`
  margin: ${({ $margin }) => $margin || "20px 0 0"};
  display: ${({ $display }) => $display || "flex"};
  flex-direction: ${({ $direction }) => $direction || "row"};
  justify-content: ${({ $justify }) => $justify || "center"};
  align-items: ${({ $align }) => $align || "center"};
  gap: ${({ $gap }) => $gap || "0"};
  width: ${({ $width }) => $width || "auto"};
  padding: ${({ $padding }) => $padding || "0"};
  margin: ${({ $margin }) => $margin || "0"};

  ${theme.media.mobile} {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CardContainer = styled(Container)`
  position: absolute;
  bottom: -80px;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  padding: 0 40px;
  gap: 1rem;

  ${theme.media.mobile} {
    flex-direction: column;
    padding: 0 20px;
    bottom: -430px;
  }

  ${theme.media.tablet} {
    flex-direction: column;
    padding: 0 20px;
    bottom: -27rem;
  }
`;
