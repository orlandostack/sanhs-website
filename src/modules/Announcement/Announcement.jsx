// src/modules/Announcement/Announcement.jsx
import { memo, useMemo, lazy, Suspense } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import theme from "../../styles/Theme";
import * as S from "./Announcement.styled";
import { announcementData } from "../../data/announcementData";

const AnnouncementCard = lazy(() =>
  import("../../components/Cards/AnnouncementCard/AnnouncementCard")
);

const Announcement = memo(({ id }) => {
  const cards = useMemo(() => announcementData.card, []);

  return (
    <S.AnnouncementWrapper id={id}>
      <S.Content>
        <SectionTitle
          title={announcementData.title}
          subtitle={announcementData.subtitle}
          titleColor={theme.color.black}
          subtitleColor={theme.color.black}
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

        <S.ViewAllButton>View All</S.ViewAllButton>
      </S.Content>
    </S.AnnouncementWrapper>
  );
});

export default Announcement;
