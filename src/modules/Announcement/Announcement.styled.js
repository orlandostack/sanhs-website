import styled from "styled-components";
import theme from "../../styles/Theme";
import { Button } from "antd";

export const AnnouncementWrapper = styled.section`
  height: auto;
  background-color: ${theme.color.section};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  gap: 35px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;

  ${theme.media.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
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
