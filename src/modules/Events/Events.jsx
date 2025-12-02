import React from "react";
import * as S from "./Events.styled.";
import EventsCard from "../../components/Cards/EventsCard";
import { EventsData } from "../../data/EventsData";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Events = ({ id }) => {
  return (
    <S.EventsWrapper id={id}>
      <SectionTitle
        title={EventsData.title}
        subtitle={EventsData.subtitle}
        titleColor={EventsData.black}
        subtitleColor={EventsData.black}
      ></SectionTitle>
      <EventsCard />
      <S.Container>
        <S.ViewAllButton>View All</S.ViewAllButton>
      </S.Container>
    </S.EventsWrapper>
  );
};

export default Events;
