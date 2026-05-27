import styled from "styled-components";
import theme from "../../styles/Theme";

export const CallToAction = styled.div`
  background: linear-gradient(to right, #1d1f1d, #046a04, #008000);
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem 2rem;
  position: relative;
  box-sizing: border-box;
  gap: 2rem;
  position: relative;
  
  .cta-text {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-width: 0;
  }

  .cta-text h3 {
    margin: 0;
    color: ${theme.color.white};
    font-size: clamp(1.4rem, 2.5vw, 2.2rem);
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1.2;
  }

  .cta-text p {
    margin: 0;
    color: ${theme.color.white};
    font-size: clamp(0.875rem, 1.2vw, 1.05rem);
    line-height: 1.6;
    opacity: 0.9;
  }

  .cta-text button {
    align-self: flex-start;
    padding: 0.875rem 2.5rem;
    background-color: #008000;
    color: ${theme.color.white};
    font-size: clamp(0.875rem, 1vw, 1rem);
    font-weight: 600;
    border: none;
    border-radius: 0.6rem;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      background-color 0.2s ease;
    white-space: nowrap;

    &:hover {
      transform: scale(1.03);
      background-color: #009900;
    }
  }

  /* ── Image block ── */
  .cta-image {
    width: 35%;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: -4rem;
    margin-bottom: -2rem;
  }

  .cta-image img {
    width: 100%;
    height: auto;
    max-height: 360px;
    object-fit: contain;
    display: block;
  }

  /* ── Tablet (769px – 1024px) ── */
  @media (max-width: 1024px) and (min-width: 769px) {
    padding: 2rem 2.5rem;
    gap: 1.5rem;

    .cta-text {
      width: 58%;
      gap: 1.25rem;
    }

    .cta-image {
      width: 38%;
      margin-top: -3rem;
      margin-bottom: -2rem;
    }
  }

  /* ── Mobile (≤ 768px) ── */
  ${theme.media.mobile} {
    flex-direction: column-reverse;
    padding: 2rem 1.5rem 1.5rem;
    border-radius: 1.25rem;
    text-align: center;
    gap: 1.25rem;

    .cta-text {
      width: 100%;
      align-items: center;
      gap: 1rem;
    }

    .cta-text button {
      align-self: center;
    }

    .cta-image {
      width: min(65%, 240px);
      margin: 0;
    }

    .cta-image img {
      max-height: 180px;
    }
  }

  /* ── Small mobile (≤ 480px) ── */
  @media (max-width: 480px) {
    padding: 1.75rem 1.25rem 1.25rem;
    border-radius: 1rem;
    gap: 1rem;

    .cta-image {
      width: min(55%, 180px);
    }

    .cta-image img {
      max-height: 140px;
    }
  }
`;