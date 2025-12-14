import { gql } from "@apollo/client";

export const GET_MVP = gql`
  query GetMvp {
    misionVisionPhilosophies {
      mission
      vision
      philosophy
    }
  }
`;
