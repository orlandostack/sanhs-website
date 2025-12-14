import styled from "styled-components";
import theme from "../../styles/Theme";
import SectionTitle from "../../components/SectionTitle";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useAnnouncement } from "../../utils/hooks/useAnnouncement";
import AnnouncementCard from "../../components/Cards/AnnouncementCard/AnnouncementCard";
import { useEffect } from "react";

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 3rem 0;
  background-color: white;
`;

const Content = styled.div`
  max-width: 85vw;
  margin: auto;
  display: flex;
  flex-direction: column;

  ${theme.media.mobile} {
    max-width: 92vw;
  }
`;

const IconWrapper = styled.div`
  width: 3rem;
  padding: 0.8rem;
  margin-bottom: 2rem;
  border-radius: 50%;
  background-color: ${theme.color.gray[100]};
  border: 1px solid ${theme.color.gray[300]};
  cursor: pointer;

  svg {
    font-size: 1.3rem;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  height: auto;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;

  ${theme.media.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const AnnouncementList = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const { loading, error, announcements } = useAnnouncement();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading)
    return (
      <Wrapper>
        <p>Loading announcements...</p>
      </Wrapper>
    );
  if (error)
    return (
      <Wrapper>
        <p>Failed to load announcements.</p>
      </Wrapper>
    );
  if (announcements.length === 0)
    return (
      <Wrapper>
        <p>No announcements available.</p>
      </Wrapper>
    );

  // Sort announcements by date
  const cards = [...announcements].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <Wrapper>
      <Content>
        <IconWrapper onClick={handleBack}>
          <GoArrowLeft />
        </IconWrapper>
        <SectionTitle title="Announcements" subtitle="Latest Updates" />

        <CardWrapper>
          {cards.map((item) => (
            <AnnouncementCard
              key={item.announcementId}
              img={item.thumbnail?.url}
              date={item.date}
              title={item.title}
              body={item.content}
            />
          ))}
        </CardWrapper>
      </Content>
    </Wrapper>
  );
};

export default AnnouncementList;
