import styled from "styled-components";
import theme from "../../styles/Theme";



export const Wrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.background};
  /* Inherits global section padding: 112px 65px 80px */
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const BlogThumbnail = styled.div`
  position: relative;
  width: 100vw;
  height: 80vh;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Tablet breakpoint */
  ${theme.media.tablet} {
    height: 60vh;
  }

  /* Mobile breakpoint */
  ${theme.media.mobile} {
    height: 50vh;
  }
`;

export const ThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 1;
`;

/**
 * Wrapper for title and subtitle to prevent overlap
 */
export const ThumbnailContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  ${theme.media.mobile} {
    gap: 0.75rem;
  }
`;

export const ThumbnailTitle = styled.h1`
  font-size: ${theme.font.heading.h1};
  font-weight: 600;
  color: ${theme.color.white};
  line-height: 1.1;
  margin: 0;
  text-align: center;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  word-break: break-word;

  ${theme.media.tablet} {
    font-size: 2.5rem;
  }

  ${theme.media.mobile} {
    font-size: 1.75rem;
  }
`;

export const ThumbnailSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${theme.color.white};
  line-height: 1.4;
  margin: 0;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  word-break: break-word;

  ${theme.media.tablet} {
    font-size: 1.2rem;
  }

  ${theme.media.mobile} {
    font-size: 1rem;
  }
`;


export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 3rem;

  ${theme.media.tablet} {
    gap: 2rem;
    padding-bottom: 2rem;
  }

  ${theme.media.mobile} {
    gap: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;


export const Gallery = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 1rem;

  ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  ${theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: ${theme.radius.md};
  display: block;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${theme.shadow.soft};

  &:hover {
    transform: scale(1.03);
    box-shadow: ${theme.shadow.medium};
  }

  ${theme.media.mobile} {
    aspect-ratio: 16/9;
  }
`;

export const ArticleHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const ArticleTitle = styled.h2`
  font-size: ${theme.font.heading.h2};
  font-weight: 600;
  color: ${theme.color.primaryAccent};
  line-height: 1.2;
  margin: 0;
  word-break: break-word;

  ${theme.media.tablet} {
    font-size: 2.2rem;
  }

  ${theme.media.mobile} {
    font-size: 1.75rem;
  }
`;

export const DateText = styled.time`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.color.gray[500]};
  margin: 0;
  padding-bottom: 0.5rem;
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 2px solid ${theme.color.gray[200]};

  ${theme.media.tablet} {
    font-size: 0.9rem;
  }

  ${theme.media.mobile} {
    font-size: 0.85rem;
  }
`;

export const BlogText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${theme.color.gray[700]};
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;

  ${theme.media.tablet} {
    font-size: 1rem;
    line-height: 1.75;
  }

  ${theme.media.mobile} {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

export const LoadingText = styled.p`
  font-size: 1.1rem;
  color: ${theme.color.gray[700]};
  text-align: center;
  padding: 2rem 0;
  margin: 0;

  ${theme.media.mobile} {
    font-size: 1rem;
  }
`;

export const ErrorText = styled.p`
  font-size: 1.1rem;
  color: ${theme.color.danger};
  text-align: center;
  padding: 2rem 0;
  margin: 0;

  ${theme.media.mobile} {
    font-size: 1rem;
  }
`;

export const NotFoundHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${theme.color.primaryAccent};
  margin: 0 0 1rem 0;

  ${theme.media.tablet} {
    font-size: 1.75rem;
  }

  ${theme.media.mobile} {
    font-size: 1.5rem;
  }
`;

export const NotFoundText = styled.p`
  font-size: 1.1rem;
  color: ${theme.color.gray[700]};
  line-height: 1.6;
  margin: 0;

  ${theme.media.mobile} {
    font-size: 1rem;
  }
`;