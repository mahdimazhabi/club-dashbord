export const useDataFetching = () => {
  const token = localStorage.getItem("token");
  const baseUrl = import.meta.env.VITE_API_URL;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  return { token, baseUrl, headers };
};
