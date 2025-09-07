// root
export interface CustomerResponse {
  id: number;
  name: string;
  email: string | null;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  is_active: number;
  shop_id: number | null;
  customer_level_id: number;
  phone: string;
  status: number;
  gender: string | null;
  national_code: string | null;
  invitation_code: string | null;
  province_id: number | null;
  city_id: number | null;
  username: string | null;
  phone_verified_at: string | null;
  first_name: string | null;
  last_name: string | null;
  email_verified: boolean;
  profile: Profile | null;
  wallet: Wallet | null;
  address: AddressItem[];
  shops: [];
  managed_shop: null;
  last_order: Order | null;
}

/* ---------- profile ---------- */
export interface Profile {
  id: number;
  avatar: string;
  bio: string | null;
  socials: null;
  contact: null;
  notifications: null;
  customer_id: number;
  created_at: string;
  updated_at: string;
  national_code: string | null;
  birthdate: string | null;
}

/* ---------- wallet & balances ---------- */
export interface Wallet {
  id: number;
  total_points: number;
  points_used: number;
  available_points: number;
  customer_id: number;
  created_at: string;
  updated_at: string;
  credit: number;
  coin: number;
  blocked: number;
  blocked_reason: string | null;
  balances: Balance[];
}

export interface Balance {
  id: number;
  wallet_id: number;
  currency: string; // e.g. "credit" | "coin" | "point"
  available: number;
  locked: number;
  scope_id: number | null;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
}

/* ---------- addresses ---------- */
export interface AddressItem {
  id: number;
  title: string | null;
  type: string | null;
  default: number; // 0 or 1
  address: AddressDetail;
  location: null;
  customer_id: number;
  created_at: string;
  updated_at: string;
}

export interface AddressDetail {
  street_address: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zip: string | null;
}

/* ---------- order ---------- */
export interface Order {
  id: number;
  tracking_number: string | null;
  customer_id: number;
  customer_contact: string | null;
  customer_name: string | null;
  amount: number | null;
  sales_tax: number | null;
  paid_total: number | null;
  total: number | null;
  note: string | null;
  cancelled_amount: number | null;
  cancelled_tax: string | null;
  cancelled_delivery_fee: string | null;
  language: string | null;
  coupon_id: number | null;
  parent_id: number | null;
  shop_id: number | null;
  discount: number | null;
  payment_gateway: string | null;
  altered_payment_gateway: string | null;
  shipping_address: AddressDetail;
  billing_address: AddressDetail | null;
  logistics_provider: string | null;
  delivery_fee: number | null;
  delivery_time: string | null;
  order_status: string | null;
  payment_status: string | null;
  created_at: string;
  delivery_name: string | null;
  delivery_phone: string | null;
  customer: OrderCustomer;
  products: Product[];
  reviews: []; // اگر ساختار مشخصی برای reviews دارید، آن را جایگزین کنید
}

/* ---------- simplified customer inside order ---------- */
export interface OrderCustomer {
  id: number;
  name: string;
  email: string | null;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  is_active: number;
  shop_id: number | null;
  customer_level_id: number;
  phone: string | null;
  status: number;
  gender: string | null;
  national_code: string | null;
  invitation_code: string | null;
  province_id: number | null;
  city_id: number | null;
  username: string | null;
  phone_verified_at: string | null;
  first_name: string | null;
  last_name: string | null;
  email_verified: boolean;
}

/* ---------- product ---------- */
export interface Product {
  id: number;
  name: string;
  slug: string | null;
  description: string | null;
  type_id: number | null;
  price: number | string | null;
  shop_id: number | null;
  sale_price: number | string | null;
  language: string | null;
  min_price: number | string | null;
  max_price: number | string | null;
  sku: string | null;
  quantity: number | null;
  sold_quantity: number | null;
  in_stock: number | null;
  is_taxable: number | null;
  in_flash_sale: number | null;
  shipping_class_id: number | null;
  status: string | null;
  visibility: string | null;
  product_type: string | null;
  unit: string | null;
  height: number | null;
  width: number | null;
  length: number | null;
  image: string | null;
  video: string | null;
  gallery: string[] | null;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  author_id: number | null;
  manufacturer_id: number | null;
  is_digital: number | null;
  is_external: number | null;
  external_product_url: string | null;
  external_product_button_text: string | null;
  blocked_dates: []; // اگر ساختار دارد، آن را تعریف کنید
  barcode: string | null;
  festival_price: string | null;
  cashback: number | null;
  cashback_type: string | null;
  ratings: number | null;
  total_reviews: number | null;
  rating_count: RatingCount[] | null;
  my_review: Review[] | null;
  in_wishlist: boolean;
  translated_languages: string[] | null;
  pivot: Pivot | null;
  variation_options: VariationOption[] | null;
}

/* ---------- product subtypes ---------- */
export interface RatingCount {
  rating: number;
  total: number;
  positive_feedbacks_count: number;
  negative_feedbacks_count: number;
  my_feedback: null;
  abusive_reports_count: number;
}

export interface Review {
  id: number;
  order_id: number;
  user_id: number;
  shop_id: number | null;
  product_id: number;
  variation_option_id: number | null;
  comment: string | null;
  rating: number;
  photos: null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  positive_feedbacks_count: number;
  negative_feedbacks_count: number;
  my_feedback: null;
  abusive_reports_count: number;
}

export interface Pivot {
  order_id: number;
  product_id: number;
  order_quantity: string | number;
  unit_price: number | string;
  subtotal: number | string;
  variation_option_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface VariationOption {
  id: number;
  title: string | null;
  image: string | null;
  price: string | number | null;
  sale_price: string | number | null;
  language: string | null;
  quantity: number | null;
  sold_quantity: number | null;
  is_disable: number | null;
  sku: string | null;
  options: ProductOption[] | null;
  product_id: number;
  digital_file_tracker: null;
  created_at: string | null;
  updated_at: string | null;
  is_digital: number | null;
  barcode: string | null;
  blocked_dates: [];
}

export interface ProductOption {
  name: string;
  value: string;
}
