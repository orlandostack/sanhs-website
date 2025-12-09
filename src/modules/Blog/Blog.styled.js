import styled from "styled-components";
import theme from "../../styles/Theme";
import { Button } from "antd";

export const BlogWrapper = styled.section`
  height: auto;
  width: 100%;
  margin: 4rem 0 0;
  background-color: ${theme.color.gray[100]};

  ${theme.media.mobile} {
    margin-top: 25rem;
  }
`;

export const Content = styled.div`
  max-width: 85vw;
  margin: auto;
  padding: 5rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ViewAllButton = styled(Button)`
  width: auto;
  align-self: center;
  padding: 1rem 1.5rem;

  &&&:hover {
    border-color: ${theme.color.primaryAccent};
    color: ${theme.color.primaryAccent};
  }
`;
