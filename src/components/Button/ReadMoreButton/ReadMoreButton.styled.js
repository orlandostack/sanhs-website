import styled from "styled-components";
import { Button } from "antd";
import theme from "../../../styles/Theme";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 20px;

  ${theme.media.mobile} {
    justify-content: center;
  }
`;

export const ButtonLabel = styled.p``;

export const ReadMore = styled(Button)`
  &&& {
    background-color: ${theme.color.primary};
    border-color: ${theme.color.primary};
    color: white;
  }

  &&&:hover {
    background-color: ${theme.color.primaryAccent};
    border-color: ${theme.color.primaryAccent};
  }
`;
