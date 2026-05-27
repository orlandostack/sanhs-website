// src/modules/Hero/Hero.jsx
import { memo, useState } from "react";
import { Link } from "react-scroll";
import { motion as MOTION } from "framer-motion";
import { slideUp } from "../../utils/helpers/transitions/transitions";
import * as S from "./Hero.styled";
import { heroData } from "../../data/heroData";
import HeroButton from "../../components/Button/HeroButton/HeroButton";
import HeroCard from "../../components/Cards/HeroCard/HeroCard";
import theme from "../../styles/Theme";
import HeroModal from "../../components/Modal/HeroModal";

import { useMvp } from "../../utils/hooks/useMvp";

const Hero = memo(({ id }) => {
  const [activeModal, setActiveModal] = useState(null);
  const { loading, error, mvp } = useMvp();

  const modalContent = (() => {
    if (!mvp || !activeModal) return "";

    return mvp[activeModal.id];
  })();

  return (
    <S.HeroWrapper id={id}>
      <S.Background>
        <S.Overlay1 />
        <S.Overlay2 />
      </S.Background>

      <S.Content>
        <MOTION.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <S.Heading>{heroData.heading}</S.Heading>
        </MOTION.div>
        <MOTION.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <S.Subheading>{heroData.subheading}</S.Subheading>
        </MOTION.div>

        <MOTION.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <S.Container $margin="20px 0" $gap="2rem">
            <Link to="footer" smooth duration={1000} spy={true}>
              <HeroButton
                $bgColor={theme.color.primary}
                $border={theme.color.primary}
              >
                {heroData.primaryButton}
              </HeroButton>
            </Link>
            <Link to="announcement" smooth duration={1000} spy={true}>
              <HeroButton $bgColor={theme.color.transparent}>
                {heroData.secondaryButton}
              </HeroButton>
            </Link>
          </S.Container>
        </MOTION.div>
      </S.Content>

      <S.CardContainer>
        {heroData.heroCard.map((item) => (
          <MOTION.div
            key={item.id}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <HeroCard
              logo={item.logo}
              title={item.title}
              subtitle={item.subtitle}
              onClick={() => setActiveModal(item)}
            />
          </MOTION.div>
        ))}
      </S.CardContainer>

      <HeroModal
        open={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={activeModal?.title}
        content={
          loading
            ? "Loading..."
            : error
              ? "Failed to load content"
              : modalContent
        }
      />
    </S.HeroWrapper>
  );
});

export default Hero;
