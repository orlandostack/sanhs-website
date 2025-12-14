import { useQuery } from "@apollo/client";
import { GET_MVP } from "../../graphql/queries/mvp";

export const useMvp = () => {
  const { loading, error, data } = useQuery(GET_MVP);

  return {
    loading,
    error,
    mvp: data?.misionVisionPhilosophies?.[0] ?? null,
  };
};
