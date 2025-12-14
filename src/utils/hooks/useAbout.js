import { useQuery } from "@apollo/client";
import { GET_ABOUT } from "../../graphql/queries/about";

export const useAbout = () => {
  const { loading, error, data } = useQuery(GET_ABOUT);

  return {
    loading,
    error,
    about: data?.abouts?.[0] ?? null,
    thumbnails: data?.abouts?.[0]?.thumbnail ?? [],
  };
};
