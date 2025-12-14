import { useQuery } from "@apollo/client";
import { GET_ANNOUNCEMENT } from "../../graphql/queries/announcement";

export const useAnnouncement = () => {
  const { loading, error, data } = useQuery(GET_ANNOUNCEMENT);

  return {
    loading,
    error,
    announcements: data?.announcements ?? [],
  };
};
