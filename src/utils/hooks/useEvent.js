import { useQuery } from "@apollo/client";
import { GET_EVENT } from "../../graphql/queries/event";

export const useEvent = () => {
  const { loading, error, data } = useQuery(GET_EVENT);

  return {
    loading,
    error,
    events: data?.events ?? [],
  };
};
