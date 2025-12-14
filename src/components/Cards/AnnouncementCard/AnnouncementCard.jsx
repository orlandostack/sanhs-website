import { memo } from "react";
import * as S from "./AnnouncementCard.styled";
import Logo from "../../../assets/logo.png";

const AnnouncementCard = memo(({ img, date, title, body }) => {
  return (
    <S.CardWrapper>
      <S.Content>
        <S.CardBody>
          <div className="wrapper">
            <img src={Logo} alt="Sanhs logo" />
            <div>
              <S.CardTitle>{title}</S.CardTitle>
              <S.CardDate>
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </S.CardDate>
            </div>
          </div>

          <div>
            {body.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </S.CardBody>

        <S.CardHeader>
          <S.Overlay className="overlay" />
          <S.Overlay2 className="overlay-2" />
          <img className="thumbnail" src={img} alt="card image" />
        </S.CardHeader>
      </S.Content>
    </S.CardWrapper>
  );
});

export default AnnouncementCard;
