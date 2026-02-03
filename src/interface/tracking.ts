export interface TrackingResponse {
  current_page: number;
  data: Tracking[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
  status: Status;
  payment_status: PaymentStatus;
  report: Report;
}

export interface Tracking {
  id: number;
  tracking_number: string;
  invoice_id: string;
  customer_id: number;
  customer_contact: string;
  customer_name: string;
  amount: number;
  sales_tax: number;
  paid_total: number;
  total: number;
  note: string;
  cancelled_amount: number;
  cancelled_tax: string;
  cancelled_delivery_fee: string;
  language: string;
  coupon_id: string;
  parent_id: string;
  shop_id: number;
  discount: number;
  campaign_id: string;
  campaign_code: string;
  campaign_title: string;
  campaign_type: string;
  campaign_discount: string;
  campaign_cashback: string;
  payment_gateway: string;
  altered_payment_gateway: string;
  shipping_address: ShippingAddress;
  billing_address: string;
  logistics_provider: string;
  delivery_fee: number;
  delivery_time: string;
  order_status:  "order-pending" | "order-processing" | "order-completed" | "order-cancelled" | "order-refunded" | "order-failed";
  payment_status: string;
  created_at: string;
  delivery_name: string;
  delivery_phone: string;
  cart_id: number;
  customer: Customer;
  products: Product[];
  children: Children[];
}

export interface ShippingAddress {
  country: string;
  title: string;
  zip: string;
  street_address: string;
  state: string;
  city: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  is_active: number;
  deleted_at: string;
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
  type: string;
  created_by: string;
  dasht_id: string;
  aria_id: string;
  Arpa_id: string;
  business_code_arpa: string;
  email_verified: boolean;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  type_id: string;
  price: number;
  shop_id: string;
  sale_price: number;
  language: string;
  min_price: string;
  max_price: string;
  sku: string;
  quantity: number;
  sold_quantity: number;
  in_stock: boolean;
  is_taxable: boolean;
  in_flash_sale: number;
  shipping_class_id: string;
  status: string;
  visibility: string;
  product_type: string;
  unit: string;
  height: string;
  width: string;
  length: string;
  image: string;
  video: string[];
  gallery: string[];
  deleted_at: string;
  created_at: string;
  updated_at: string;
  author_id: string;
  manufacturer_id: string;
  is_digital: boolean;
  is_external: boolean;
  external_product_url: string;
  external_product_button_text: string;
  blocked_dates: string;
  barcode: string;
  festival_price: string;
  cashback: string;
  cashback_type: string;
  is_package: boolean;
  seo: Seo;
  tax_id: number;
  short_description: string;
  package_items: string;
  is_weightable: string;
  dasht_id: string;
  ratings: number;
  total_reviews: number;
  rating_count: string[];
  my_review: string[];
  in_wishlist: boolean;
  blocked_dates_parsed: string[];
  warehouse_stock: number;
  available_quantity: string;
  pivot: Pivot;
  variation_options: string[];
  variations: string[];
}

export interface Seo {
  canonical_url: string;
  meta_description: string;
  meta_title: string;
}

export interface Pivot {
  order_id: number;
  product_id: number;
  order_quantity: string;
  unit_price: number;
  subtotal: number;
  variation_option_id: string;
  created_at: string;
  updated_at: string;
}

export interface Children {
  id: number;
  tracking_number: string;
  invoice_id: string;
  customer_id: number;
  customer_contact: string;
  customer_name: string;
  amount: number;
  sales_tax: number;
  paid_total: number;
  total: number;
  note: string;
  cancelled_amount: number;
  cancelled_tax: string;
  cancelled_delivery_fee: string;
  language: string;
  coupon_id: string;
  parent_id: number;
  shop_id: number;
  discount: number;
  campaign_id: string;
  campaign_code: string;
  campaign_title: string;
  campaign_type: string;
  campaign_discount: string;
  campaign_cashback: string;
  payment_gateway: string;
  altered_payment_gateway: string;
  shipping_address: ShippingAddress2;
  billing_address: string;
  logistics_provider: string;
  delivery_fee: number;
  delivery_time: string;
  order_status: string;
  payment_status: string;
  created_at: string;
  delivery_name: string;
  delivery_phone: string;
  cart_id: string;
  customer: Customer2;
  products: Product2[];
}

export interface ShippingAddress2 {
  country: string;
  title: string;
  zip: string;
  street_address: string;
  state: string;
  city: string;
}

export interface Customer2 {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  is_active: number;
  deleted_at: string;
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
  type: string;
  created_by: string;
  dasht_id: string;
  aria_id: string;
  Arpa_id: string;
  business_code_arpa: string;
  email_verified: boolean;
}

export interface Product2 {
  id: number;
  name: string;
  slug: string;
  description: string;
  type_id: string;
  price: number;
  shop_id: string;
  sale_price: number;
  language: string;
  min_price: string;
  max_price: string;
  sku: string;
  quantity: number;
  sold_quantity: number;
  in_stock: boolean;
  is_taxable: boolean;
  in_flash_sale: number;
  shipping_class_id: string;
  status: string;
  visibility: string;
  product_type: string;
  unit: string;
  height: string;
  width: string;
  length: string;
  image: string;
  video: string[];
  gallery: string[];
  deleted_at: string;
  created_at: string;
  updated_at: string;
  author_id: string;
  manufacturer_id: string;
  is_digital: boolean;
  is_external: boolean;
  external_product_url: string;
  external_product_button_text: string;
  blocked_dates: string;
  barcode: string;
  festival_price: string;
  cashback: string;
  cashback_type: string;
  is_package: boolean;
  seo: Seo2;
  tax_id: number;
  short_description: string;
  package_items: string;
  is_weightable: string;
  dasht_id: string;
  ratings: number;
  total_reviews: number;
  rating_count: string[];
  my_review: string[];
  in_wishlist: boolean;
  blocked_dates_parsed: string[];
  warehouse_stock: number;
  available_quantity: string;
  pivot: Pivot2;
  variation_options: string[];
  variations: string[];
}

export interface Seo2 {
  canonical_url: string;
  meta_description: string;
  meta_title: string;
}

export interface Pivot2 {
  order_id: number;
  product_id: number;
  order_quantity: string;
  unit_price: number;
  subtotal: number;
  variation_option_id: string;
  created_at: string;
  updated_at: string;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface Status {
  "order-pending": string;
  "order-processing": string;
  "order-completed": string;
  "order-cancelled": string;
  "order-refunded": string;
  "order-failed": string;
}

export interface PaymentStatus {
  "payment-pending": string;
  "payment-paid": string;
  "payment-refunded": string;
}

export interface Report {
  total_orders: number;
  total_amount: TotalAmount;
  order_status_count: OrderStatusCount;
  payment_status_count: PaymentStatusCount;
}

export interface TotalAmount {
  "payment-success": number;
  "payment-not_success": number;
}

export interface OrderStatusCount {
  "order-pending": number;
  "order-processing": number;
  "order-completed": number;
  "order-cancelled": number;
  "order-refunded": number;
  "order-failed": number;
}

export interface PaymentStatusCount {
  "payment-pending": number;
  "payment-success": number;
  "payment-refunded": number;
  "payment-processing": number;
  "payment-failed": number;
  "payment-cash-on-delivery": number;
  "payment-wallet": number;
}
