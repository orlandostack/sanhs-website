import styled from "styled-components";
import theme from "../../styles/Theme";
import { Button } from "antd";

export const BlogWrapper = styled.section`
  height: auto;
  width: 100%;
  background-color: ${theme.color.gray[100]};

  ${theme.media.mobile} {
    margin-top: 25rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${theme.media.mobile} {
    max-width: 92vw;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ViewAllButton = styled(Button)`
  width: auto;
  padding: 1.2rem 2rem;
  background-color: ${theme.color.primaryAccent} !important;
  color: ${theme.color.white} !important;

  &:hover {
    transform: scale(1.05);
    border: 1px solid ${theme.color.primaryAccent} !important;
  }
`;
