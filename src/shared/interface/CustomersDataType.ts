interface Wallet {
  id: number;
  total_points: number;
  points_used: number;
  available_points: number;
  customer_id: number;
  created_at: string;
  updated_at: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  email_verified: boolean;
  email_verified_at: string | null;
  phone: string;
  gender: string;
  national_code: string | null;
  province_id: number;
  city_id: number;
  //   address: any[]; // اگر آدرس یک آرایه‌ی از objectها باشه، باید مشخص بشه
  shop_id: number | null;
  //   shops: any[];
  //   managed_shop: any | null;
  invitation_code: string;
  customer_level_id: number;
  status: number;
  is_active: number;
  //   last_order: any | null;
  //   profile: any | null;
  created_at: string;
  updated_at: string;
  wallet: Wallet;
}
