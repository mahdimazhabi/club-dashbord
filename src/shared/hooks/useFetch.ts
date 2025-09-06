export const useFetch = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return { baseUrl, token, headers };
};
