export interface SettingRsponse {
  id: number;
  options: Options;
  language: string;
  created_at: string;
  updated_at: string;
  customer_level_type: string;
  customer_leveling_type: string;
  maintenance: Maintenance2;
}

export interface Options {
  enableEmailForDigitalProduct: string;
  currencyToWalletRatio: string;
  maximumQuestionLimit: string;
  useMustVerifyEmail: string;
  minimumOrderAmount: string;
  isUnderMaintenance: string;
  useCashOnDelivery: string;
  enableReviewPopup: string;
  useEnableGateway: string;
  pushNotification: PushNotification;
  maxShopDistance: string;
  isProductReview: string;
  currencyOptions: CurrencyOptions;
  paymentGateway: PaymentGateway[];
  contactDetails: ContactDetails;
  StripeCardOnly: string;
  shippingClass: string;
  guestCheckout: string;
  enableCoupons: string;
  copyrightText: string;
  useGoogleMap: string;
  siteSubtitle: string;
  signupPoints: string;
  reviewSystem: ReviewSystem;
  isPromoPopUp: string;
  freeShipping: string;
  deliveryTime: DeliveryTime[];
  app_settings: AppSettings;
  server_info: ServerInfo;
  maintenance: Maintenance;
  promoPopup: PromoPopup;
  emailEvent: EmailEvent;
  siteTitle: string;
  taxClass: string;
  smsEvent: SmsEvent;
  currency: string;
  useOtp: string;
  useAi: string;
  banners: Banner[];
  collapseLogo: CollapseLogo;
  logo: string;
  bannerTop: BannerTop[];
  fav_icon: string;
  conversionRate: string;
  bannerMiddle: BannerMiddle[];
  sliders: Slider[];
  webservice: Webservice[];
  store: Store;
}

export interface PushNotification {
  all: All;
}

export interface All {
  storeNotice: string;
  message: string;
  order: string;
}

export interface CurrencyOptions {
  fractions: string;
  formation: string;
}

export interface PaymentGateway {
  name: string;
  value: string;
}

export interface ContactDetails {
  contact: string;
  socials: Social[];
  website: string;
  location: Location;
  emailAddress: string;
}

export interface Social {
  url: string;
  icon: string;
}

export interface Location {
  state: string;
  country: string;
  formattedAddress: string;
}

export interface ReviewSystem {
  name: string;
  value: string;
}

export interface DeliveryTime {
  title: string;
  description: string;
}

export interface AppSettings {
  last_checking_time: string;
  trust: boolean;
}

export interface ServerInfo {
  upload_max_filesize: number;
  memory_limit: string;
  max_execution_time: string;
  max_input_time: string;
  post_max_size: number;
}

export interface Maintenance {
  newsLetterDescription: string;
  aboutUsDescription: string;
  overlayColorRange: string;
  newsLetterTitle: string;
  isOverlayColor: string;
  contactUsTitle: string;
  buttonTitleTwo: string;
  buttonTitleOne: string;
  overlayColor: string;
  aboutUsTitle: string;
  description: string;
  until: string;
  title: string;
  start: string;
  image: Image;
}

export interface Image {
  thumbnail: string;
  file_name: string;
  original: string;
  id: string;
}

export interface PromoPopup {
  popUpExpiredIn: string;
  isPopUpNotShow: string;
  popUpNotShow: PopUpNotShow;
  description: string;
  popUpDelay: string;
  title: string;
  image: Image2;
}

export interface PopUpNotShow {
  popUpExpiredIn: string;
  title: string;
}

export interface Image2 {
  thumbnail: string;
  file_name: string;
  original: string;
  id: string;
}

export interface EmailEvent {
  customer: Customer;
  vendor: Vendor;
  admin: Admin;
}

export interface Customer {
  answerQuestion: string;
  statusChangeOrder: string;
  paymentOrder: string;
  refundOrder: string;
}

export interface Vendor {
  createQuestion: string;
  createReview: string;
  statusChangeOrder: string;
  paymentOrder: string;
  refundOrder: string;
}

export interface Admin {
  statusChangeOrder: string;
  paymentOrder: string;
  refundOrder: string;
}

export interface SmsEvent {
  customer: Customer2;
  vendor: Vendor2;
  admin: Admin2;
}

export interface Customer2 {
  statusChangeOrder: string;
  paymentOrder: string;
  refundOrder: string;
}

export interface Vendor2 {
  statusChangeOrder: string;
  paymentOrder: string;
  refundOrder: string;
}

export interface Admin2 {
  statusChangeOrder: string;
  paymentOrder: string;
  refundOrder: string;
}

export interface Banner {
  image: string;
}

export interface CollapseLogo {
  thumbnail: string;
  file_name: string;
  original: string;
  id: string;
}

export interface BannerTop {
  title: string;
  link: string;
  images: string;
  status: string;
  priority: string;
}

export interface BannerMiddle {
  title: string;
  link: string;
  images: string;
  status: string;
  priority: string;
}

export interface Slider {
  img: string;
  title: string;
  address: string;
  status: string;
  category: string;
}

export interface Webservice {
  title: string;
  status: string;
  key: string;
}

export interface Store {
  store_online: StoreOnline;
  main_page: MainPage;
  contact: Contact;
}

export interface StoreOnline {
  title: string;
  description: string;
  status: string;
}

export interface MainPage {
  title: string;
  phone: string;
  description: string;
  address: string;
}

export interface Contact {
  orderNumber1: string;
  orderNumber2: string;
  storeAddress1: string;
  supportNumber1: string;
  supportNumber2: string;
  storeAddress2: string;
}

export interface Maintenance2 {
  start: string;
  until: string;
}
