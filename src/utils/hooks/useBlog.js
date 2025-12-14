import { useQuery } from "@apollo/client";
import { GET_BLOG } from "../../graphql/queries/blog";

export const useBlog = () => {
  const { loading, error, data } = useQuery(GET_BLOG);

  return {
    loading,
    error,
    blogs: data?.blogs ?? [],
  };
};
