// src/modules/Hero/Hero.jsx
import { memo } from "react";
import { Link } from "react-scroll";
import * as S from "./Hero.styled";
import { heroData } from "../../data/heroData";
import HeroButton from "../../components/Button/HeroButton/HeroButton";
import HeroCard from "../../components/Cards/HeroCard/HeroCard";
import theme from "../../styles/Theme";

const Hero = memo(({ id }) => {
  return (
    <S.HeroWrapper id={id}>
      <S.Overlay1 />
      <S.Overlay2 />

      <S.Content>
        <S.Subheading>{heroData.subheading}</S.Subheading>
        <S.Heading>{heroData.heading}</S.Heading>

        <S.Container $margin="20px 0" $gap="2rem">
          <Link to="contacts" smooth duration={1000} spy={true}>
            <HeroButton $color={theme.color.black}>
              {heroData.primaryButton}
            </HeroButton>
          </Link>
          <Link to="announcement" smooth duration={1000} spy={true}>
            <HeroButton $bgColor={theme.color.transparent}>
              {heroData.secondaryButton}
            </HeroButton>
          </Link>
        </S.Container>
      </S.Content>

      <S.CardContainer>
        {heroData.heroCard.map((item) => (
          <HeroCard
            key={item.id}
            logo={item.logo}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </S.CardContainer>
    </S.HeroWrapper>
  );
});

export default Hero;
