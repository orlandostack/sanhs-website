import { gql } from "@apollo/client";

export const GET_DOWNLOADFILE = gql`
  query GetDownloadFile {
    downloadFiles {
      title
      fileId
      description
      pdfFile {
        url
      }
    }
  }
`;
