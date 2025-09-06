export const useFetch = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  return { baseUrl };
};
