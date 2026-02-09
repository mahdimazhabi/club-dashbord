export interface MissionResponse {
  data: Mission[];
  current_page: number;
  from: number;
  to: number;
  last_page: number;
  path: string;
  per_page: number;
  total: number;
  next_page_url: string;
  prev_page_url: string;
  last_page_url: string;
  first_page_url: string;
}

export interface Mission {
  id: number;
  title: string;
  description?: string;
  image_url?: string;
  type?: string;
}
