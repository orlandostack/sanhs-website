// src/modules/Announcement/Announcement.jsx
import { memo, useMemo, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import * as S from "./Announcement.styled";
import { announcementData } from "../../data/announcementData";

const AnnouncementCard = lazy(() =>
  import("../../components/Cards/AnnouncementCard/AnnouncementCard")
);

const Announcement = memo(({ id }) => {
  const cards = useMemo(() => {
    return [...announcementData.card]
      .sort((a, b) => b.date - a.date)
      .slice(0, 2);
  }, []);

  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/announcementpage");
  };

  return (
    <S.AnnouncementWrapper id={id}>
      <S.Content>
        <SectionTitle
          title={announcementData.title}
          subtitle={announcementData.subtitle}
        />

        <S.CardContainer>
          <Suspense fallback={<div>Loading cards...</div>}>
            {cards.map((item) => (
              <AnnouncementCard
                key={item.id}
                img={item.img}
                date={item.date}
                brand={item.brand}
                title={item.cardtitle}
                body={item.cardbody}
              />
            ))}
          </Suspense>
        </S.CardContainer>

        <S.ViewAllButton onClick={handleViewAll}>View All</S.ViewAllButton>
      </S.Content>
    </S.AnnouncementWrapper>
  );
});

export default Announcement;
