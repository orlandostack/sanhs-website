import { gql } from "@apollo/client";

export const GET_ANNOUNCEMENT = gql`
  query GetAnnouncement {
    announcements {
      title
      announcementId
      thumbnail {
        url
      }
      content
      date
      link
    }
  }
`;
