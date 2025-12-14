import styled from "styled-components";
import theme from "../../styles/Theme";

export const AboutWrapper = styled.section`
  height: auto;
  width: 100%;
  margin: 10rem 0 2rem 0;

  ${theme.media.mobile} {
    margin-top: 30rem;
  }
`;

export const Content = styled.div`
  max-width: 85vw;
  margin: auto;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${theme.media.mobile} {
    max-width: 92vw;
  }
`;

export const AboutHeader = styled.div`
  display: flex;
  gap: 1.5rem;

  ${theme.media.mobile} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .Logo {
    object-fit: contain;
    height: auto;
    width: 4.5rem;
  }

  .Header {
    display: flex;
    flex-direction: column;

    h1 {
      margin: 0;
      color: ${theme.color.primaryAccent};
      font-size: 1.8rem;

      ${theme.media.mobile} {
        font-size: 1.3rem;
      }
    }

    h2 {
      margin: 0;
      color: ${theme.color.gray[600]};
      font-size: 1.2rem;

      ${theme.media.mobile} {
        font-size: 1rem;
      }
    }
  }
`;

export const AboutInfo = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  -webkit-line-clamp: ${({ $isExpanded }) => ($isExpanded ? "unset" : "3")};
  line-clamp: ${({ $isExpanded }) => ($isExpanded ? "unset" : "3")};

  line-height: 1.6;
  text-align: justify;
  margin-bottom: 0;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${theme.color.primaryAccent};
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  margin: 0 auto 1rem auto;
  display: block;
`;

export const Collage = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  height: 60vh;

  ${theme.media.mobile} {
    flex-direction: column;
  }

  .LeftSide {
    width: 65%;

    ${theme.media.mobile} {
      width: 100%;
    }
  }

  .LeftSide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .RightSide {
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    ${theme.media.mobile} {
      width: 100%;
    }
  }

  .RightSide img {
    width: 100%;
    height: 29vh;
    object-fit: cover;
    border-radius: 8px;
    flex: 1;
  }
`;
