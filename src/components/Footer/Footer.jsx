import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { memo } from "react";
import * as S from "./Footer.styled";
import { footerData } from "../../data/footerData";

const Footer = memo(({ id }) => {
  return (
    <S.FooterWrapper id={id}>
      <S.Content>
        <S.LogoContainer>
            <S.Logo src={footerData.logo} alt="San Antonio National High School Logo" />
            <S.SchoolTextContainer>
              <S.SchoolName>SANHS</S.SchoolName>
              <S.SchoolFullName>San Antonio National High School</S.SchoolFullName>
            </S.SchoolTextContainer>
          </S.LogoContainer>

        <S.ContactSection>
          <S.ContactTitle>We'd love to hear from you!</S.ContactTitle>
          <S.ContactDescription>
            Whether you have questions, feedback, or just want to say hello,
            feel free to reach out to us. We're always here to help.
          </S.ContactDescription>
          <S.Address>
            <FaMapMarkedAlt /> Sampaguita, San Antonio, Quezon, Philippines 4524
          </S.Address>
        </S.ContactSection>

        <S.GetInTouch>Get in touch</S.GetInTouch>

        {/* Social Media Icons */}
        <S.SocialIconsContainer>
          {footerData.socials.map((social, index) => (
            <S.SocialIconLink
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <S.SocialIcon>
                {social.icon === "facebook" && <FaFacebookF />}
                {social.icon === "twitter" && <FaTwitter />}
                {social.icon === "instagram" && <FaInstagram />}
                {social.icon === "email" && <FaEnvelope />}
              </S.SocialIcon>
            </S.SocialIconLink>
          ))}
        </S.SocialIconsContainer>

        <S.Copyright>
          @2025 - All rights reserved | San Antonio National High School
        </S.Copyright>
      </S.Content>
    </S.FooterWrapper>
  );
});

export default Footer;