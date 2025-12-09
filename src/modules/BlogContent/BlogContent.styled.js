import styled from "styled-components";
import theme from "../../styles/Theme";

export const Wrapper = styled.section`
  height: auto;
  width: 100%;
  padding: 3rem 0;
`;

export const Content = styled.div`
  max-width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: column;

  ${theme.media.mobile} {
    max-width: 90vw;
  }
`;

export const IconWrapper = styled.div`
  width: 3rem;
  padding: 0.8rem;
  margin-bottom: 2rem;
  border-radius: 50%;
  background-color: ${theme.color.gray[100]};
  border: 1px solid ${theme.color.gray[300]};
  cursor: pointer;

  svg {
    font-size: 1.3rem;
  }

  ${theme.media.mobile} {
    width: 3rem;
    padding: 0.8rem;

    svg {
      font-size: 1.3rem;
    }
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${theme.color.primaryAccent};
  margin: 0;

  ${theme.media.mobile} {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.8rem;
  color: ${theme.color.gray[700]};
  margin: 0 0 2rem 0;

  ${theme.media.mobile} {
    font-size: 1.3rem;
  }
`;

export const DateText = styled.h3`
  font-size: 1rem;
  font-style: italic;
  color: ${theme.color.gray[500]};
  margin: 0 0 2rem 0;
`;

export const BlogText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${theme.color.gray[700]};
`;
