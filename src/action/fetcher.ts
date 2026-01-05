import api from "@/config/htpp/axios";
export type FetcherResponse<T> = {
  data: T;
  status: number;
};

export interface FetcherParams {
  endpoint: string;
  method: "get" | "post" | "put" | "patch" | "delete";
  contentType?: "json" | "formdata";
  body?: Record<string, any>;
  query?: Record<string, any>;
  path?: string;
  token?: string;
}

export async function fetcher<T>(
  params: FetcherParams
): Promise<FetcherResponse<T>> {
  try {
    let url = params.endpoint;
    if (params.path) url += `/${params.path}`;

    // Query Params
    if (params.query) {
      url += `?${new URLSearchParams(
        Object.entries(params.query).reduce((acc, [k, v]) => {
          if (v !== undefined && v !== null) acc[k] = String(v);
          return acc;
        }, {} as Record<string, string>)
      )}`;
    }

    // Body
    let dataToSend: any = params.body;
    if (params.contentType === "formdata") {
      const formData = new FormData();
      Object.entries(params.body || {}).forEach(([key, value]) => {
        if (value !== undefined && value !== null)
          formData.append(key, value instanceof Blob ? value : String(value));
      });
      dataToSend = formData;
    }

    // توکن
    const token = params.token ?? localStorage.getItem("token");

    const headers: Record<string, string> = {};
    if (params.contentType === "json")
      headers["Content-Type"] = "application/json";
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const res = await api.request<T>({
      url,
      method: params.method,
      data: dataToSend,
      headers,
    });

    return { data: res.data, status: res.status };
  } catch (error: any) {
    return {
      data: {
        message: "یک خطای ناشناخته رخ داد.",
        error: error?.response?.data,
      } as unknown as T,
      status: error?.response?.status ?? 500,
    };
  }
}
