import { memo, useState, useRef, useEffect } from "react";
import * as S from "./AnnouncementCard.styled";
import Logo from "../../../assets/logo.png";

const AnnouncementCard = memo(({ img, date, title, body }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const checkOverflow = () => {
      if (descriptionRef.current) {
        const element = descriptionRef.current;
        // Check if text is overflowing the 2-line clamp
        setIsOverflowing(element.scrollHeight > element.clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [body]);

  const lines = body.split("\n");

  return (
    <S.CardWrapper>
      <S.Content>
        <S.CardBody>
          <S.CardHeader>
            <img className="card__header--logo" src={Logo} alt="Sanhs logo" />
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
          </S.CardHeader>

          <S.DescriptionWrapper $isExpanded={isExpanded}>
            <S.CardDescription ref={descriptionRef} $isExpanded={isExpanded}>
              {lines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </S.CardDescription>
            {!isExpanded && isOverflowing && (
              <S.ToggleButton onClick={toggleExpand}>
                see more...
              </S.ToggleButton>
            )}
          </S.DescriptionWrapper>

          {isExpanded && (
            <S.ToggleButtonExpanded onClick={toggleExpand}>
              see less
            </S.ToggleButtonExpanded>
          )}

          <S.OtherLinks href="" target="_blank" rel="noopener noreferrer">Other Links</S.OtherLinks>


          <S.CardThumbnail>
            <S.Overlay className="overlay" />
            <S.Overlay2 className="overlay-2" />
            <img className="thumbnail" src={img} alt="card image" />
          </S.CardThumbnail>
        </S.CardBody>
      </S.Content>
    </S.CardWrapper>
  );
});

export default AnnouncementCard;