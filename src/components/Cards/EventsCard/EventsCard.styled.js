import styled from "styled-components";
import theme from "../../../styles/Theme";

export const EventsCardWrapper = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  gap: 2.5rem;
  margin-top: 4rem;
  grid-template-columns: repeat(3, 1fr);

  ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${theme.media.mobile} {
    grid-template-columns: 1fr;

    & > *:nth-child(n + 5) {
      display: none;
    }
  }
`;

export const Card = styled.div`
  border-radius: ${theme.radius.xl};
  background-color: ${theme.color.white};
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.20);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: flex-start;
  transition: all 0.3s ease;
  padding: 20px;

  &:hover {
    background-color: ${theme.color.white};
    transform: translateY(-8px);
  }

  ${theme.media.mobile} {
    flex-direction: column;

    &:hover {
      transform: none;
    }
  }
`;

export const Date = styled.div`
  border-radius: 10px;
  height: 100%;
  background: linear-gradient(to bottom, ${theme.color.primary}, #324632);
  padding: 2rem;
  font-family: ${theme.font.family.heading};
  font-weight: bold;
  font-size: 1.2rem;
  color: ${theme.color.white};
  width: 9rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  ${theme.media.mobile} {
    font-size: 1rem;
    margin-right: 0;
    margin-bottom: 0.5rem;
    min-width: auto;
  }
`;

export const EventTitle = styled.h3`
  font-size: ${theme.font.size.lg};
  font-weight: 500;
  flex: 1;
  padding: 0.5rem;
  transition: all 0.3s ease;
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${theme.media.mobile} {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;


