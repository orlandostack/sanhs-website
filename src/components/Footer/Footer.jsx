import { memo } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";
import * as S from "./Footer.styled";
import { footerData } from "../../data/footerData";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/San+Antonio+National+High+School/@13.886893,121.2869551,17z/data=!4m14!1m7!3m6!1s0x33bd3f959415f435:0x82c7d7a32a0bda0c!2sSan+Antonio+National+High+School!8m2!3d13.886893!4d121.28953!16s%2Fg%2F11bzvwvt67!3m5!1s0x33bd3f959415f435:0x82c7d7a32a0bda0c!8m2!3d13.886893!4d121.28953!16s%2Fg%2F11bzvwvt67?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D";

const SOCIAL_ICON_MAP = {
  facebook: <FaFacebookF aria-hidden="true" />,
  twitter: <FaTwitter aria-hidden="true" />,
  instagram: <FaInstagram aria-hidden="true" />,
  youtube: <FaYoutube aria-hidden="true" />,
  email: <FaEnvelope aria-hidden="true" />,
};

const Footer = memo(({ id }) => {
  return (
    <S.FooterWrapper id={id}>
      <S.FooterDetails>
        <S.Content>
          <S.LogoContainer>
            <S.Logo
              src={footerData.logo}
              alt="San Antonio National High School logo"
              width={60}
              height={60}
              loading="lazy"
              decoding="async"
            />
            <S.SchoolTextContainer>
              <S.SchoolName>SANHS</S.SchoolName>
              <S.SchoolFullName>
                San Antonio National High School
              </S.SchoolFullName>
            </S.SchoolTextContainer>
          </S.LogoContainer>

          <S.ContactSection>
            <S.ContactTitle>We'd love to hear from you!</S.ContactTitle>
            <S.ContactDescription>
              Whether you have questions, feedback, or just want to say hello,
              feel free to reach out to us. We're always here to help.
            </S.ContactDescription>

            <S.AddressLink
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open school location on Google Maps (opens in a new tab)"
            >
              <FaMapMarkedAlt aria-hidden="true" />
              Sampaguita, San Antonio, Quezon, Philippines 4524
            </S.AddressLink>
          </S.ContactSection>

          <S.GetInTouch>Get in touch</S.GetInTouch>
          <S.SocialIconsContainer>
            {footerData.socials.map((social) => (
              <S.SocialIconLink
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name} page (opens in a new tab)`}
              >
                <S.SocialIcon>
                  {SOCIAL_ICON_MAP[social.icon] ?? null}
                </S.SocialIcon>
              </S.SocialIconLink>
            ))}
          </S.SocialIconsContainer>

          <S.Copyright>
            &copy; 2025 — All rights reserved | San Antonio National High School
          </S.Copyright>
        </S.Content>
      </S.FooterDetails>
    </S.FooterWrapper>
  );
});

Footer.displayName = "Footer";

export default Footer;