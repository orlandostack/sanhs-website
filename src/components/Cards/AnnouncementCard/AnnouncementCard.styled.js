import styled from "styled-components";
import theme from "../../../styles/Theme";

export const CardWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: ${theme.color.white};
  overflow: hidden;
  box-shadow: ${theme.shadow.soft};
  border-radius: ${theme.radius.md};
  border: 1px solid ${theme.color.gray[300]};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  .overlay-2 {
    display: none;
  }

  .read-more-btn {
    display: none;
  }

  &:hover {
    box-shadow: ${theme.shadow.medium};
    transform: translateY(-4px);

    .overlay-2 {
      display: block;
    }
  }

  ${theme.media.tablet} {
    width: 100%;
  }

  ${theme.media.mobile} {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: ${({ $position }) => $position};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  bottom: ${({ $bottom }) => $bottom};
  right: ${({ $right }) => $right};
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  ${theme.media.tablet} {
    width: 100%;
  }

  ${theme.media.mobile} {
    width: 100%;
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.5)
  );
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
`;

export const CardDate = styled.h1`
  margin: 0;
  font-size: ${theme.font.size.xl};
  color: ${theme.color.white};
`;

export const CardBrand = styled.h2`
  font-size: ${theme.font.size.base};
  margin: 0;
  color: ${theme.color.black};
`;

export const CardTitle = styled.h3`
  font-size: ${theme.font.size.xl};
  font-weight: 600;
  color: ${theme.color.primaryAccent};
  margin: 0;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
`;

export const CardBody = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 20px;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wrapper {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    img {
      object-fit: cover;
      height: auto;
      width: 2.5rem;
    }
  }
`;

export const CardFooter = styled.div``;
