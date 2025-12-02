import { memo } from "react";
import * as S from "./AnnouncementCard.styled";
import ReadMoreButton from "../../Button/ReadMoreButton/ReadMoreButton";

const AnnouncementCard = memo(({ img, date, brand, title, body }) => {
  return (
    <S.CardWrapper>
      <S.Content>
        <S.CardHeader>
          <S.Overlay className="overlay" />
          <S.Overlay2 className="overlay-2" />
          <img src={img} alt="card image" />

          <S.Content $position="absolute" $bottom="10px" $left="20px">
            <S.CardDate>{date}</S.CardDate>
            <S.CardBrand>{brand}</S.CardBrand>
            <S.CardTitle>{title}</S.CardTitle>
          </S.Content>
        </S.CardHeader>

        <S.CardBody>
          <p> {body}</p>
        </S.CardBody>

        <S.CardFooter>
          <ReadMoreButton className="read-more-btn" />
        </S.CardFooter>
      </S.Content>
    </S.CardWrapper>
  );
});

export default AnnouncementCard;
