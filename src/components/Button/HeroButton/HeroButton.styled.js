import styled from "styled-components";
import theme from "../../../styles/Theme";

export const HeroButtonStyled = styled.button`
  padding: ${({ $padding }) => $padding || "10px 40px"};
  background-color: ${({ $bgColor }) => $bgColor || theme.color.gray[100]};
  border: 1px solid;
  border-color: ${({ $border }) => $border || theme.color.white};
  color: ${({ $color }) => $color || theme.color.white};
  border-radius: ${theme.radius.md};
  font-size: ${theme.font.size.lg};
  box-shadow: ${theme.shadow.soft};

  &:hover {
    background-color: ${theme.color.primaryAccent};
    border: 1px solid ${theme.color.primaryAccent};
    color: ${theme.color.white};
    transform: translateY(-2px);
  }
`;
