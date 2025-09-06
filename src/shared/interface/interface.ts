export interface Root {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  is_active: number;
  shop_id: string;
  customer_level_id: number;
  phone: string;
  status: number;
  gender: string;
  national_code: string;
  invitation_code: string;
  province_id: string;
  city_id: string;
  username: string;
  phone_verified_at: string;
  first_name: string;
  last_name: string;
  email_verified: boolean;
  profile: string;
  wallet: string;
  address: Address[];
  shops: string[];
  managed_shop: string;
  last_order: string;
}

export interface Address {
  id: number;
  title: string;
  type: string;
  default: number;
  address: Address2;
  location: string;
  customer_id: number;
  created_at: string;
  updated_at: string;
}

export interface Address2 {
  street_address: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}
