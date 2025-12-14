import { gql } from "@apollo/client";

export const GET_EVENT = gql`
  query GetEvent {
    events {
      title
      eventId
      date
    }
  }
`;
