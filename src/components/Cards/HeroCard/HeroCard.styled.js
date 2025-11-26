// src/components/Cards/HeroCard/HeroCard.styled.js
import styled from "styled-components";
import theme from "../../../styles/Theme";

export const CardWrapper = styled.div`
  width: 300px;
  height: 160px;
  background: ${theme.color.white};
  border-radius: 18px;
  box-shadow: ${theme.shadow.soft};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px;
  transition: 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadow.large};
    background-color: ${theme.color.primaryAccent};
    color: ${theme.color.white};
  }
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    object-fit: contain;
  }

  svg {
    color: ${theme.color.green};
  }
`;

export const Title = styled.h3`
  font-size: ${theme.font.size.xl};
  margin: 0;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  font-size: ${theme.font.size.base};
  color: ${theme.color.gray};
  margin: 0;
`;
