import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Tokens ───────────────────────────────────────────────── */
const t = {
  bg: "#ffffff",
  surface: "#f9f9f9",
  surfaceSecondary: "#f3f4f6",
  textPrimary: "#111111",
  textSecondary: "#444444",
  textMuted: "#6b7280",
  border: "#e4e4e7",
  borderHover: "#d1d5db",
  primary: "#0070f3",
  primaryHover: "#0060df",
  warnBg: "rgba(245, 158, 11, 0.10)",
  warnBorder: "rgba(245, 158, 11, 0.35)",
  warnText: "#b45309",
};

/* ── Page shell ───────────────────────────────────────────── */
export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${t.bg};
  color: ${t.textPrimary};
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  animation: ${fadeIn} 0.45s ease both;
`;

/* ── Header ───────────────────────────────────────────────── */
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding-bottom: 8px;
`;

export const LogoText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${t.textPrimary};
  letter-spacing: -0.01em;
`;

export const LogoSubtext = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: ${t.textMuted};
  letter-spacing: 0.01em;
`;

/* ── Hero ─────────────────────────────────────────────────── */
export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 13px;
  border-radius: 999px;
  background: ${t.warnBg};
  border: 1px solid ${t.warnBorder};
  color: ${t.warnText};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.01em;

  &::before {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${t.warnText};
    flex-shrink: 0;
    box-shadow: 0 0 0 2px rgba(251, 191, 36, 0.25);
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  color: ${t.textPrimary};
  letter-spacing: -0.03em;
  line-height: 1.1;
`;

export const HeroDescription = styled.div`
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    color: ${t.textSecondary};
    line-height: 1.65;
  }
`;

/* ── Cards ────────────────────────────────────────────────── */
export const Card = styled.div`
  background: ${t.surface};
  border: 1px solid ${t.border};
  border-radius: 16px;
  padding: 24px;
  transition: border-color 0.18s ease;

  &:hover {
    border-color: ${t.borderHover};
  }
`;

export const CardTitle = styled.h2`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: ${t.textPrimary};
  letter-spacing: -0.01em;
`;

export const CardDivider = styled.hr`
  border: none;
  border-top: 1px solid ${t.border};
  margin: 0 0 16px 0;
`;

/* ── Status card specifics ────────────────────────────────── */
export const StatusLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
`;

export const StatusDot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${t.warnText};
  flex-shrink: 0;
  box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.18);
`;

export const StatusName = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${t.warnText};
`;

export const CardBody = styled.p`
  margin: 0;
  font-size: 15px;
  color: ${t.textSecondary};
  line-height: 1.65;
`;

export const CardBodySecondary = styled.p`
  margin: 10px 0 0 0;
  font-size: 14px;
  color: ${t.textMuted};
  line-height: 1.65;
`;

/* ── Services card ────────────────────────────────────────── */
export const ServicesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ServiceItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: ${t.textSecondary};
`;

export const ServiceCheck = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(0, 112, 243, 0.12);
  border: 1px solid rgba(0, 112, 243, 0.25);
  color: ${t.primary};
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
`;

/* ── Action card ──────────────────────────────────────────── */
export const ActionCard = styled(Card)`
  background: ${t.surfaceSecondary};
`;

/* ── CTA area ─────────────────────────────────────────────── */
export const CTAGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 10px;
  background: ${t.primary};
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition:
    background 0.15s ease,
    transform 0.1s ease;
  cursor: pointer;

  &:hover {
    background: ${t.primaryHover};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SecondaryLink = styled.span`
  font-size: 14px;
  color: ${t.textMuted};
  text-decoration: none;
  cursor: default;
  user-select: none;
`;

/* ── Footer ───────────────────────────────────────────────── */
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
  padding-top: 8px;
  border-top: 1px solid ${t.border};
`;

export const FooterCompany = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${t.textSecondary};
`;

export const FooterDesc = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${t.textMuted};
  max-width: 420px;
  line-height: 1.55;
`;

export const FooterCopyright = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${t.textMuted};
`;

export const FooterNote = styled.p`
  margin: 0;
  font-size: 11px;
  color: #52525b;
  max-width: 380px;
  line-height: 1.5;
`;
