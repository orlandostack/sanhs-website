import styled from "styled-components";
import theme from "../../../styles/Theme";

export const EventsCardWrapper = styled.section`
  height: auto;
  width: 100%;
  background-color: #fff;
  display: grid;
  gap: 2.5rem;
  margin-top: 4rem;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  
  ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
  }
  
  ${theme.media.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);

    & > *:nth-child(n+5) {
      display: none;
    }
  }
`;

export const Date = styled.div`
  border-radius: 8px 0 0 8px;
  height: 100%;
  background-color: ${theme.color.primaryAccent};
  padding: 2rem;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;
  min-width: 80px;
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


export const Details = styled.div`
  font-family: ${theme.font.family};
  font-size: 1rem;
  line-height: 1.2;
  color: ${theme.color.gray[600]};
  flex: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 0.5rem;
  -webkit-line-clamp: 4;
  height: calc(1.3em * 4);
  transition: all 0.3s ease;
  
  ${theme.media.mobile} {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const Card = styled.div`
  cursor: pointer;
  border-radius: 9px;
  border: 1px solid #0f5132;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: flex-start;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: ${theme.color.primaryAccent};
    background-color: #f8f9fa;
    
    ${Date} {
      background-color: ${theme.color.primary || "#0f5132"};
    }
    
    ${Details} {
      color: #000;
    }
  }
  
  ${theme.media.mobile} {
    flex-direction: column;
    
    &:hover {
      transform: none;
    }
  }
`;