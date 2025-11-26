import { memo } from "react";
import * as S from "./HeroCard.styled";

const HeroCard = memo(({ logo: Logo, title, subtitle }) => {
  const isIcon = typeof Logo === "function";

  return (
    <S.CardWrapper>
      <S.IconWrapper>
        {isIcon ? <Logo size={40} /> : <img src={Logo} alt={title} />}
      </S.IconWrapper>

      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.CardWrapper>
  );
});

export default HeroCard;
