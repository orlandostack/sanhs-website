import { memo } from "react";
import * as S from "./Hero.styled";
import { heroData } from "../../data/heroData";
import HeroButton from "../../components/Button/HeroButton/HeroButton";
import theme from "../../styles/Theme";

const Hero = memo(() => {
  return (
    <S.HeroWrapper>
      <S.Overlay1 />
      <S.Overlay2 />

      <S.Content>
        <S.Heading>{heroData.heading}</S.Heading>
        <S.Subheading>{heroData.subheading}</S.Subheading>

        <S.Container>
          <HeroButton $color={theme.color.black}>
            {heroData.primaryButton}
          </HeroButton>
          <HeroButton $bgColor={theme.color.transparent} $border="1px solid">
            {heroData.secondaryButton}
          </HeroButton>
        </S.Container>
      </S.Content>
    </S.HeroWrapper>
  );
});

export default Hero;
