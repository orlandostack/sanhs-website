import styled from "styled-components";
import theme from "../../styles/Theme";

export const FooterWrapper = styled.section`
  height: auto;
  width: 100%;
  background-color: #0f5132;
  color: ${theme.color.white};

  ${theme.media.mobile} {
    margin-top: 25rem;
  }
`;

export const Content = styled.div`
  max-width: 85vw;
  margin: auto;
  padding: 5rem 0 4rem 0;
  display: flex;
  flex-direction: column;
`;

export const SchoolInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  ${theme.media.mobile} {
    gap: 0.5rem;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;

  ${theme.media.mobile} {
    width: 50px;
    height: 50px;
  }
`;

export const SchoolTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SchoolName = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: ${theme.color.white};

  ${theme.media.mobile} {
    font-size: 1.8rem;
  }
`;

export const SchoolFullName = styled.h3`
  font-size: 1.2rem;
  font-weight: normal;
  margin: 0;
  color: ${theme.color.white};
  opacity: 0.9;

  ${theme.media.mobile} {
    font-size: 1rem;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const ContactTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: ${theme.color.white};
`;

export const ContactDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: ${theme.color.white};
  opacity: 0.9;
  max-width: 100%;
`;

export const Address = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${theme.color.white};
  opacity: 0.9;
`;

export const GetInTouch = styled.h5`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
  color: ${theme.color.white};
  margin-bottom: 1rem;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: flex-start;
  align-items: center;

  ${theme.media.mobile} {
    gap: 0.8rem;
  }
`;

export const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export const SocialIcon = styled.span`
  font-size: 1.2rem;
  color: ${theme.color.white};
`;

export const Copyright = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: ${theme.color.white};
  opacity: 0.8;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;