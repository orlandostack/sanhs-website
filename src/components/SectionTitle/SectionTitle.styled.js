import styled from "styled-components";
import theme from "../../styles/Theme";

export const SectionContainer = styled.div`
  text-align: left;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  margin: 0;
  color: ${(props) => props.titleColor || theme.color.black};
  line-height: 1.2;
`;

export const SubTitle = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: ${(props) => props.subtitleColor || theme.color.black};
  line-height: 1.5;
`;
