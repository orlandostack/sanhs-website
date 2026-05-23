import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";
import CTAImage from "../../assets/cta-image.png";
import { memo } from "react";
import * as S from "./Footer.styled";
import { footerData } from "../../data/footerData";

// Google Maps URL constant for maintainability and security
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/San+Antonio+National+High+School/@13.886893,121.2869551,17z/data=!4m14!1m7!3m6!1s0x33bd3f959415f435:0x82c7d7a32a0bda0c!2sSan+Antonio+National+High+School!8m2!3d13.886893!4d121.28953!16s%2Fg%2F11bzvwvt67!3m5!1s0x33bd3f959415f435:0x82c7d7a32a0bda0c!8m2!3d13.886893!4d121.28953!16s%2Fg%2F11bzvwvt67?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D";

const Footer = memo(({ id }) => {
  return (
    <S.FooterWrapper id={id}>
      <S.CallToAction>
        <div className="cta-text">
          <h3>Let’s Talk — We’re Here to Help</h3>
          <p>
            Have questions about enrollment, academic programs, or school
            activities? Reach out to us anytime—our team is ready to guide you
            every step of the way.
          </p>
          <button>Message Us</button>
        </div>
        <div className="cta-image">
          <img src={CTAImage} alt="Call to Action Image" />
        </div>
      </S.CallToAction>
      <S.FooterDetails>
        <S.Content>
          <S.LogoContainer>
            <S.Logo
              src={footerData.logo}
              alt="San Antonio National High School Logo"
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

            {/* Updated Address as a clickable link */}
            <S.AddressLink
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open San Antonio National High School location on Google Maps"
            >
              <FaMapMarkedAlt />
              Sampaguita, San Antonio, Quezon, Philippines 4524
            </S.AddressLink>
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
      </S.FooterDetails>
    </S.FooterWrapper>
  );
});

export default Footer;
