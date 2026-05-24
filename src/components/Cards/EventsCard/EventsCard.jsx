import * as S from "./EventsCard.styled";
import { useEvent } from "../../../utils/hooks/useEvent";

function EventsCard() {
  const { loading, error, events } = useEvent();

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Failed to load events.</p>;
  if (events.length === 0) return <p>No events available.</p>;

  return (
    <S.EventsCardWrapper>
      {events.map((event) => (
        <S.Card key={event.eventId}>
          <S.Date>{event.date}</S.Date>
          <S.EventTitle>{event.title}</S.EventTitle>
        </S.Card>
      ))}
    </S.EventsCardWrapper>
  );
}

export default EventsCard;
