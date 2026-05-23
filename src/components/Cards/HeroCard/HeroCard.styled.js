import styled from "styled-components";
import theme from "../../../styles/Theme";

export const Title = styled.p`
  font-size: ${theme.font.size["2xl"]};
  font-weight: 500;
  color: ${theme.color.white};
`;

export const Subtitle = styled.p`
  font-size: ${theme.font.size.base};
  margin: 0;
  color: ${theme.color.white};
`;

export const CardWrapper = styled.div`
  width: 300px;
  height: 160px;
  background: ${theme.color.white};
  border-radius: 16px;
  box-shadow: ${theme.shadow.soft};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px;
  transition: 0.3s ease;
  cursor: pointer;
  background-color: ${theme.color.primaryAccent};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadow.large};
    color: ${theme.color.white};

    svg {
      color: ${theme.color.white};
    }

    ${Title},
    ${Subtitle} {
      color: ${theme.color.white};
    }
  }

  ${theme.media.tablet} {
    width: 50vw;
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
    color: ${theme.color.white};
  }
`;
