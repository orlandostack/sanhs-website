import styled from "styled-components";
import theme from "../../styles/Theme";

export const AboutWrapper = styled.section`
  height: auto;
  width: 100%;
  padding-top: 176px;
  background-color: ${theme.color.section};

  ${theme.media.tablet} {
    margin-top: 26rem;
  }

  ${theme.media.mobile} {
    margin-top: 26rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const AboutDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AboutHeader = styled.div`
  display: flex;
  gap: 1.5rem;

  .logo {
    object-fit: contain;
    height: auto;
    width: 4.5rem;
  }

  .header {
    display: flex;
    flex-direction: column;

    h2 {
      margin: 0;
      color: ${theme.color.black};
      font-weight: 500;

      ${theme.media.mobile} {
        font-size: 1.3rem;
      }
    }

    p {
      margin: 0;
      color: ${theme.color.gray[600]};
    }
  }

  ${theme.media.mobile} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const AboutInfo = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: ${({ $isExpanded }) => ($isExpanded ? "unset" : "3")};
  line-clamp: ${({ $isExpanded }) => ($isExpanded ? "unset" : "3")};
  text-align: justify;
  margin-bottom: 0;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  margin: 0 auto 1rem auto;
  display: block;
  color: ${theme.color.primary};

  &:hover {
    color: ${theme.color.primaryDark};
  }
`;

export const Collage = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  height: 60vh;

  ${theme.media.mobile} {
    flex-direction: column;
    height: auto;
  }

  .left-side {
    width: 65%;

    ${theme.media.mobile} {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  .right-side {
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    ${theme.media.mobile} {
      width: 100%;
    }

    img {
      width: 100%;
      height: 29vh;
      object-fit: cover;
      border-radius: 8px;
      flex: 1;
    }
  }
`;