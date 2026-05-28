import { memo } from "react";
import * as S from "./HeroButton.styled";

const HeroButton = memo(({ children, ...props }) => {
  return <S.HeroButtonStyled {...props}>{children}</S.HeroButtonStyled>;
});

HeroButton.displayName = "HeroButton";

export default HeroButton;