import styled from "styled-components";
import theme from "../../styles/Theme";

export const Wrapper = styled.section`
  height: auto;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
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

export const BlogThumbnail = styled.div`
  width: 100%;
  height: 80vh;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  position: relative;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
`;

export const Body = styled.div`
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;

  ${theme.media.mobile} {
    padding: 2rem;
  }
`;

export const Gallery = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  ${theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;

export const GalleryImage = styled.img`
  border-radius: 8px;
  margin: 6rem 0;

  ${theme.media.mobile} {
    margin: 2rem 0;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${theme.color.primaryAccent};
  line-height: 2.5rem;
  margin: 0;

  ${theme.media.mobile} {
    font-size: 2rem;
  }

  &.Thumbnail-Title {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${theme.color.white};
    text-align: center;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: ${theme.color.gray[700]};
  margin: 0 0 2rem 0;

  ${theme.media.mobile} {
    font-size: 1.3rem;
  }

  &.Thumbnail-Subtitle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${theme.color.white};
    text-align: center;

    ${theme.media.mobile} {
      top: 55%;
    }
  }
`;

export const DateText = styled.h3`
  font-size: 1rem;
  color: ${theme.color.gray[500]};
  margin: 0 0 2rem 0;
`;

export const BlogText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${theme.color.gray[700]};
`;
