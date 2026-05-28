import { memo } from "react";
import * as S from "./SectionTitle.styled";

/**
 * SectionTitle
 * @param {string}  title         - Main heading text
 * @param {string}  [subtitle]    - Optional subtitle text
 * @param {string}  [titleColor]  - Optional colour override for title
 * @param {string}  [subtitleColor] - Optional colour override for subtitle
 * @param {1|2|3|4|5|6} [level=2] - Heading level for the title (h1–h6)
 */
const SectionTitle = memo(
  ({ title, subtitle, titleColor, subtitleColor, level = 2 }) => {
    return (
      <S.SectionContainer>
        <S.Title as={`h${level}`} $titleColor={titleColor}>
          {title}
        </S.Title>
        {subtitle && (
          <S.SubTitle
            as={`h${Math.min(level + 1, 6)}`}
            $subtitleColor={subtitleColor}
          >
            {subtitle}
          </S.SubTitle>
        )}
      </S.SectionContainer>
    );
  }
);

SectionTitle.displayName = "SectionTitle";

export default SectionTitle;