import { memo, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import * as S from "./Announcement.styled";
import { useAnnouncement } from "../../utils/hooks/useAnnouncement";

const AnnouncementCard = lazy(
  () => import("../../components/Cards/AnnouncementCard/AnnouncementCard"),
);

const ANNOUNCEMENT_CONFIG = {
  DISPLAY_LIMIT: 2,
  VIEW_ALL_THRESHOLD: 2,
};

const Announcement = memo(({ id }) => {
  const { loading, error, announcements } = useAnnouncement();
  const navigate = useNavigate();

  const handleViewAll = () => navigate("/announcements");

  if (loading)
    return (
      <S.AnnouncementWrapper id={id}>
        <p role="status">Loading announcements...</p>
      </S.AnnouncementWrapper>
    );

  if (error)
    return (
      <S.AnnouncementWrapper id={id}>
        <p role="alert">Failed to load announcements.</p>
      </S.AnnouncementWrapper>
    );

  const shouldShowViewAll =
    announcements.length > ANNOUNCEMENT_CONFIG.VIEW_ALL_THRESHOLD;

  const displayedAnnouncements = [...announcements]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, ANNOUNCEMENT_CONFIG.DISPLAY_LIMIT);

  return (
    <S.AnnouncementWrapper id={id}>
      <S.Content>
        <SectionTitle
          title="Announcements"
          subtitle="Latest Updates"
          level={2}
        />
        <S.CardContainer>
          <Suspense fallback={<div role="status">Loading cards...</div>}>
            {displayedAnnouncements.map((item) => (
              <AnnouncementCard
                key={item.announcementId}
                img={item.thumbnail?.url}
                date={item.date}
                title={item.title}
                body={item.content}
                link={item.link}
              />
            ))}
          </Suspense>
        </S.CardContainer>

        {shouldShowViewAll && (
          <S.ViewAllButton
            onClick={handleViewAll}
            aria-label="View all announcements"
          >
            View All
          </S.ViewAllButton>
        )}
      </S.Content>
    </S.AnnouncementWrapper>
  );
});

Announcement.displayName = "Announcement";

export default Announcement;
