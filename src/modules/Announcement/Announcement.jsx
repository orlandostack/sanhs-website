import { memo, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import * as S from "./Announcement.styled";
import { useAnnouncement } from "../../utils/hooks/useAnnouncement";

const AnnouncementCard = lazy(() =>
  import("../../components/Cards/AnnouncementCard/AnnouncementCard")
);

const Announcement = memo(({ id }) => {
  const { loading, error, announcements } = useAnnouncement();
  const navigate = useNavigate();

  const handleViewAll = () => navigate("/announcementpage");

  if (loading)
    return (
      <S.AnnouncementWrapper id={id}>
        <p>Loading announcements...</p>
      </S.AnnouncementWrapper>
    );
  if (error)
    return (
      <S.AnnouncementWrapper id={id}>
        <p>Failed to load announcements.</p>
      </S.AnnouncementWrapper>
    );

  // Sort and take first 2 announcements
  const cards = [...announcements]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  return (
    <S.AnnouncementWrapper id={id}>
      <S.Content>
        <SectionTitle title="Announcements" subtitle="Latest Updates" />

        <S.CardContainer>
          <Suspense fallback={<div>Loading cards...</div>}>
            {cards.map((item) => (
              <AnnouncementCard
                key={item.announcementId}
                img={item.thumbnail?.url}
                date={item.date}
                title={item.title}
                body={item.content}
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
