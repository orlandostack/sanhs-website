// src/components/Cards/HeroCard/HeroCard.jsx
import { memo } from "react";
import * as S from "./HeroCard.styled";

const HeroCard = memo(({ logo: Logo, title, subtitle, onClick }) => {
  const isIcon = typeof Logo === "function";

  return (
    <S.CardWrapper onClick={onClick}>
      <S.IconWrapper>
        {isIcon ? <Logo size={40} /> : <img src={Logo} alt={title} />}
      </S.IconWrapper>

      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.CardWrapper>
  );
});

export default HeroCard;
