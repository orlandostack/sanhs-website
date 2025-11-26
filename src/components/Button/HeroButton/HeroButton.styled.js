import styled from "styled-components";
import theme from "../../../styles/Theme";

export const HeroButtonStyled = styled.button`
  padding: ${({ $padding }) => $padding || "10px 40px"};
  background-color: ${({ $bgColor }) => $bgColor || theme.color.gray[100]};
  border: ${({ $border }) => $border || "none"};
  color: ${({ $color }) => $color || theme.color.white};
  border-radius: ${theme.radius.md};
  font-size: ${theme.font.size.lg};
  box-shadow: ${theme.shadow.soft};

  &:hover {
    background-color: ${theme.color.primaryAccent};
    color: ${theme.color.black};
    border: none;
    transform: translateY(-2px);
  }
`;
