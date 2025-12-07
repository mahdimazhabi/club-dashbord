export const ApiConfig = () => {
  const token = localStorage.getItem("token");
  const baseUrl = import.meta.env.VITE_API_URL;
  const shop_url = import.meta.env.VITE_SHOP_URL;
  const File_url = import.meta.env.VITE_FILE_URL;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const headersFormData = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };

  return { token, baseUrl, headers, headersFormData, shop_url, File_url };
};
