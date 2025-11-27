import React from "react";
import * as S from "./SectionTitle.styled";

const SectionTitle = ({ title, subtitle, titleColor, subtitleColor }) => {
  return (
    <S.SectionContainer>
      <S.Title titleColor={titleColor}>{title}</S.Title>
      {subtitle && (
        <S.SubTitle subtitleColor={subtitleColor}>{subtitle}</S.SubTitle>
      )}
    </S.SectionContainer>
  );
};

export default SectionTitle;
