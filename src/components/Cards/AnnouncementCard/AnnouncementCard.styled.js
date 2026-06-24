import styled from "styled-components";
import theme from "../../../styles/Theme";

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.white};
  overflow: hidden;
  box-shadow: ${theme.shadow.soft};
  border-radius: ${theme.radius.xl};
  border: 1px solid ${theme.color.gray[300]};
  transition: all 0.2s ease-in-out;

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
  flex: 1;
  flex-direction: column;
  position: ${({ $position }) => $position};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  bottom: ${({ $bottom }) => $bottom};
  right: ${({ $right }) => $right};
`;

export const CardBody = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;

  .card__header--logo {
    object-fit: cover;
    height: auto;
    width: 4.375rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: ${theme.font.size["2xl"]};
  font-weight: 500;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardDate = styled.p`
  font-size: ${theme.font.size.sm};
  color: ${theme.color.gray[500]};
  font-weight: 500;
`;

export const DescriptionWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardDescription = styled.div`
  text-align: justify;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: -webkit-line-clamp 0.3s ease-in-out;
  -webkit-line-clamp: ${({ $isExpanded }) => ($isExpanded ? "unset" : "2")};
  width: 100%;
  line-height: 1.5;

  p {
    margin: 0;
    padding: 0;
    display: inline;
  }

  p:not(:last-child)::after {
    content: " ";
  }
`;

export const OtherLinks = styled.a`
  color: ${theme.color.primary};
  margin-top: 1rem;
  text-decoration: underline;

  &:hover {
    color: ${theme.color.primaryDark};
    text-decoration: underline;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${theme.color.primary};
  cursor: pointer;
  font-size: ${theme.font.size.sm};
  padding: 0;
  margin: 0;
  white-space: nowrap;
  transition: color 0.2s ease-in-out;
  display: inline;
  font-family: inherit;
  text-align: left;
  width: fit-content;

  &:hover {
    color: ${theme.color.primary_dark};
  }

  &:active {
    opacity: 0.8;
  }
`;

export const ToggleButtonExpanded = styled.button`
  background: none;
  border: none;
  color: ${theme.color.primary};
  cursor: pointer;
  font-size: ${theme.font.size.sm};
  font-weight: 500;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  transition: color 0.2s ease-in-out;
  display: inline;
  font-family: inherit;
  width: fit-content;

  &:hover {
    color: ${theme.color.primary_dark};
    text-decoration: underline;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const CardThumbnail = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin-top: 10px;

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
    border-radius: 10px;
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
  border-radius: 10px;
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
  border-radius: 10px;
`;
