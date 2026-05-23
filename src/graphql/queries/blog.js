import { gql } from "@apollo/client";

export const GET_BLOG = gql`
  query GetBlog {
    blogs {
      title
      blogId
      subtitle
      thumbnail {
        url
      }
      content
      isFeatured
      date
      gallery {
        url
      }
    }
  }
`;
