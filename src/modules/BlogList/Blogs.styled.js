import styled from "styled-components";
import theme from "../../styles/Theme";

// Section wrapper
export const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 3rem 0;
  background-color: whitesmoke;
`;

// Content container
export const Content = styled.div`
  max-width: 85vw;
  display: flex;
  flex-direction: column;

  ${theme.media.mobile} {
    max-width: 92vw;
  }
`;

// Header with section title + search input
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  ${theme.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  ${theme.media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

// Search input
export const SearchInput = styled.input`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.color.primaryAccent};
  font-size: 1rem;
  width: 50%;

  ${theme.media.tablet} {
    width: 100%;
  }

  ${theme.media.mobile} {
    width: 100%;
  }
`;

// Back icon wrapper
export const IconWrapper = styled.div`
  width: 3rem;
  padding: 0.8rem;
  margin-bottom: 2rem;
  border-radius: 50%;
  background-color: ${theme.color.gray[100]};
  border: 1px solid ${theme.color.gray[300]};
  cursor: pointer;

  svg {
    font-size: 1.3rem;
  }

  ${theme.media.mobile} {
    width: 3rem;
    padding: 0.8rem;

    svg {
      font-size: 1.3rem;
    }
  }
`;

// Cards container
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

// Individual blog card
export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.03);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    text-align: left;
  }

  .title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    line-height: 1.3;
    color: white;

    ${theme.media.mobile} {
      font-size: 1.1rem;
    }
  }

  .subtitle {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.9;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    color: #e0e0e0;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    ${theme.media.mobile} {
      -webkit-line-clamp: 1;
    }
  }

  .date {
    margin: 0;
    font-size: 0.8rem;
    opacity: 0.7;
    font-style: italic;
    color: ${theme.color.gray[300]};
  }
`;
