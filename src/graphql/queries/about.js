import { gql } from "@apollo/client";

export const GET_ABOUT = gql`
  query GetAbout {
    abouts {
      aboutInfo
      thumbnail {
        url
      }
    }
  }
`;
