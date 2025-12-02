import styled from "styled-components";
import theme from "../../styles/Theme";
import { Button } from "antd";

export const EventsWrapper = styled.section`
  height: auto;
  max-width: 85vw;
  margin-left:auto;
  margin-right: auto;
  margin-top: 2rem;
  background-color: #fff;
  align-items: center;
  ${theme.media.mobile} {
  }
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
