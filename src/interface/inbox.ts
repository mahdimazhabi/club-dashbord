export interface InboxListsResponse {
  current_page: number;
  data: Inbox[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Inbox {
  id: number;
  title: string;
  body: string;
  category: string;
  created_by: number;
  published_at: string;
  expired_at: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
  user_states: string[];
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}
