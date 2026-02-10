import { useQuery } from "@tanstack/react-query";

const useFirstPage = () => {
  const firstPageData = useQuery({
    queryKey: ["first"],
  });
  return {};
};

export default useFirstPage;
