import styled from "styled-components";
import theme from "../../styles/Theme";
import { Button } from "antd";

export const AnnouncementWrapper = styled.section`
  height: auto;
  background-color: white;
`;

export const Content = styled.div`
  max-width: 85vw;
  margin: auto;
  padding: 5rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.media.tablet} {
    flex-direction: column;
  }

  ${theme.media.mobile} {
    flex-direction: column;
  }
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
