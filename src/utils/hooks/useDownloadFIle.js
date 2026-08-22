import { useQuery } from "@apollo/client";
import { GET_DOWNLOADFILE } from "../../graphql/queries/downloadFile";

export const useDownloadFile = () => {
  const { data, loading, error } = useQuery(GET_DOWNLOADFILE);

  return {
    downloadFiles: data?.downloadFiles ?? [],
    loading,
    error,
  };
};
