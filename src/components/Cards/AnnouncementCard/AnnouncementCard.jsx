import { memo } from "react";
import * as S from "./AnnouncementCard.styled";
import Logo from "../../../assets/logo.png";
import ReadMoreButton from "../../Button/ReadMoreButton/ReadMoreButton";

const AnnouncementCard = memo(({ img, date, brand, title, body }) => {
  return (
    <S.CardWrapper>
      <S.Content>
        <S.CardBody>
          <div className="wrapper">
            <img src={Logo} alt="Sanhs logo" />
            <div>
              <S.CardTitle>{title}</S.CardTitle>
              <S.CardDate>
                {date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </S.CardDate>
            </div>
          </div>

          <p> {body}</p>
        </S.CardBody>

        <S.CardHeader>
          <S.Overlay className="overlay" />
          <S.Overlay2 className="overlay-2" />
          <img className="thumbnail" src={img} alt="card image" />

          <S.Content
            $position="absolute"
            $bottom="10px"
            $left="20px"
          ></S.Content>
        </S.CardHeader>
      </S.Content>
    </S.CardWrapper>
  );
});

export default AnnouncementCard;
