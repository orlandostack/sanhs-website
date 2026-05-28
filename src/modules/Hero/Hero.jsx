import { memo, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { slideUp } from "../../utils/helpers/transitions/transitions";
import * as S from "./Hero.styled";
import { heroData } from "../../data/heroData";
import HeroButton from "../../components/Button/HeroButton/HeroButton";
import HeroCard from "../../components/Cards/HeroCard/HeroCard";
import theme from "../../styles/Theme";
import HeroModal from "../../components/Modal/HeroModal";
import { useMvp } from "../../utils/hooks/useMvp";

const MotionDiv = motion.div;

const Hero = memo(({ id }) => {
  const [activeModal, setActiveModal] = useState(null);
  const { loading, error, mvp } = useMvp();

  const modalContent = (() => {
    if (!mvp || !activeModal) return "";
    return mvp[activeModal.id];
  })();

  const handleOpenModal = (item) => setActiveModal(item);
  const handleCloseModal = () => setActiveModal(null);

  return (
    <S.HeroWrapper id={id}>
      <S.Background aria-hidden="true">
        <S.Overlay1 />
        <S.Overlay2 />
      </S.Background>

      <S.Content>
        <MotionDiv
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <S.Heading>{heroData.heading}</S.Heading>
        </MotionDiv>

        <MotionDiv
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <S.Subheading>{heroData.subheading}</S.Subheading>
        </MotionDiv>

        <MotionDiv
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <S.Container $margin="20px 0" $gap="2rem">
            <Link to="footer" smooth duration={1000} spy>
              <HeroButton
                $bgColor={theme.color.primary}
                $border={theme.color.primary}
                aria-label="Contact us"
              >
                {heroData.primaryButton}
              </HeroButton>
            </Link>
            <Link to="announcement" smooth duration={1000} spy>
              <HeroButton
                $bgColor={theme.color.transparent}
                aria-label="View announcements"
              >
                {heroData.secondaryButton}
              </HeroButton>
            </Link>
          </S.Container>
        </MotionDiv>
      </S.Content>

      <S.CardContainer>
        {heroData.heroCard.map((item) => (
          <MotionDiv
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
              onClick={() => handleOpenModal(item)}
            />
          </MotionDiv>
        ))}
      </S.CardContainer>

      <HeroModal
        open={!!activeModal}
        onClose={handleCloseModal}
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

Hero.displayName = "Hero";

export default Hero;