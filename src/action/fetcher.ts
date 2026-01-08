import api from "@/config/htpp/axios";

export type FetcherResponse<T> = {
  data: T;
  status: number;
};

export interface FetcherParams<BodyType = any, QueryType = any> {
  endpoint: string;
  method: "get" | "post" | "put" | "patch" | "delete";
  contentType?: "json" | "formdata";
  body?: BodyType;
  query?: QueryType;
  path?: string | number;
  token?: string;
}

/**
 * یک fetcher عمومی و قابل استفاده در همه جای پروژه
 */
export async function fetcher<
  T = any,
  BodyType = any,
  QueryType = Record<string, any>
>(params: FetcherParams<BodyType, QueryType>): Promise<FetcherResponse<T>> {
  try {
    let url = params.endpoint;

    // اضافه کردن path
    if (params.path !== undefined) url += `/${params.path}`;

    // اضافه کردن query params
    if (params.query) {
      const queryString = new URLSearchParams(
        Object.entries(params.query).reduce((acc, [k, v]) => {
          if (v !== undefined && v !== null) acc[k] = String(v);
          return acc;
        }, {} as Record<string, string>)
      ).toString();
      url += queryString ? `?${queryString}` : "";
    }

    // ساخت body
    const dataToSend: BodyType | undefined = params.body;

    // headers
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
  } catch (err: any) {
    const status = err?.response?.status ?? 500;
    const data = err?.response?.data ?? { message: "یک خطای ناشناخته رخ داد." };

    return {
      status,
      data,
    };
  }
}
