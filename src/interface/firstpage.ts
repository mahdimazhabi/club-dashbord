export interface FirstPageResponse {
  missions: Mission[];
  campaigns: Campaign[];
}

export interface Mission {
  id: number;
  title: string;
  description?: string;
  image_url?: string;
  type?: string;
  label: string;
}

export interface Campaign {
  id: number;
  title: string;
  description?: string;
  image?: string;
  icon?: string;
}
