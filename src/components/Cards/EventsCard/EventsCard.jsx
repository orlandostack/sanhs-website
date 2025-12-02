
import React from 'react';
import * as S from "./EventsCard.styled";
import eventsData from "../../../data/EventsCardData"

function EventsCard() {
  const displayedEvents = eventsData.slice(0, 8);
  
  return (
    <S.EventsCardWrapper>
      {displayedEvents.map((event, index) => (
        <S.Card key={index}>
          <S.Date>{event.date}</S.Date>
          <S.Details>{event.details}</S.Details>
        </S.Card>
      ))}
    </S.EventsCardWrapper>
  );
}

export default EventsCard;