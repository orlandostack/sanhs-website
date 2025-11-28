import styled from "styled-components";
import theme from "../../../styles/Theme";

export const Collage = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  height: 55vh;

  ${theme.media.mobile} {
    flex-direction: column;
    height: auto;
  }

  ${theme.media.tablet} {
    flex-direction: column;
    height: auto;
  }

  .LeftSide {
    width: 65%;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;

    ${theme.media.mobile} {
      width: 100%;
    }

    ${theme.media.tablet} {
      width: 100%;
    }
  }

  .LeftSide .card {
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }

  .LeftSide .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .LeftSide .card:hover img {
    transform: scale(1.03);
  }

  .RightSide {
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${theme.media.mobile} {
      width: 100%;
      height: auto;
    }

    ${theme.media.tablet} {
      width: 100%;
      height: auto;
    }
  }

  .RightSide .card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    flex: 1;
    cursor: pointer;
  }

  .RightSide .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .RightSide .card:hover img {
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

  .content {
    color: white;
  }

  .title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    line-height: 1.3;

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

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .date {
    margin: 0;
    font-size: 0.8rem;
    opacity: 0.7;
    font-style: italic;
  }

  .LeftSide .title {
    font-size: 1.5rem;

    ${theme.media.mobile} {
      font-size: 1.1rem;
    }
  }

  .LeftSide .subtitle {
    font-size: 1rem;
  }

  .LeftSide .date {
    font-size: 0.9rem;
  }
`;
