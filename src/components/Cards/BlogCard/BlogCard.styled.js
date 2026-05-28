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

  /* ── Left (featured) ── */
  .left-side {
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

  .left-side .card {
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    display: block;

    &:focus-visible {
      outline: 3px solid ${theme.color.primaryAccent};
      outline-offset: 2px;
    }
  }

  .left-side .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
  }

  .left-side .card:hover img {
    transform: scale(1.03);
  }

  /* ── Right (secondary) ── */
  .right-side {
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

  .right-side .card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    flex: 1;
    cursor: pointer;
    display: block;

    &:focus-visible {
      outline: 3px solid ${theme.color.primaryAccent};
      outline-offset: 2px;
    }
  }

  .right-side .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
  }

  .right-side .card:hover img {
    transform: scale(1.03);
  }

  /* ── Shared overlay ── */
  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
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
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.3;

    ${theme.media.mobile} {
      font-size: 1.1rem;
    }
  }

  .subtitle {
    margin: 0 0 0.5rem;
    font-size: 0.9rem;
    opacity: 0.9;
    line-height: 1.4;

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

  /* ── Left-side overrides ── */
  .left-side .title {
    font-size: 1.5rem;

    ${theme.media.mobile} {
      font-size: 1.1rem;
    }
  }

  .left-side .subtitle {
    font-size: 1rem;
  }

  .left-side .date {
    font-size: 0.9rem;
  }
`;