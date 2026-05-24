import styled from "styled-components";
import theme from "../../styles/Theme";

export const SectionContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  color: ${(props) => props.$titleColor || theme.color.primaryAccent};
`;

export const SubTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${(props) => props.$subtitleColor || theme.color.black};
`;
