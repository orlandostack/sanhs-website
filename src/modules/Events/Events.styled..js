import styled from "styled-components";
import theme from "../../styles/Theme";
import { Button } from "antd";

export const EventsWrapper = styled.section`
  height: auto;
  background-color: ${theme.color.surface};
  align-items: center;

`;

export const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ViewAllButton = styled(Button)`
  width: auto;
  align-self: center;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;

  &&&:hover {
    border-color: ${theme.color.primaryAccent};
    color: ${theme.color.primaryAccent};
  }
`;
