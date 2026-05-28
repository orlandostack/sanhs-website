import { memo } from "react";
import * as S from "./Events.styled";
import EventsCard from "../../components/Cards/EventsCard";
import { EventsData } from "../../data/EventsData";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Events = memo(({ id }) => {
  return (
    <S.EventsWrapper id={id}>
      <SectionTitle title={EventsData.title} subtitle={EventsData.subtitle} />
      <EventsCard />
    </S.EventsWrapper>
  );
});

Events.displayName = "Events";

export default Events;