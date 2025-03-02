interface Address {
    line1: string;
    line2?: string;
    line3?: string;
    neighborhood: string;
    city: string;
    state: string;
    postal_code: string;
    country_code: string;
  }
  
  interface Customer {
    _id: string;
    name: string;
    doc: string;
    email: string;
    phone: string;
  }
  
  interface Seller {
    id: string;
    name: string;
    email: string;
  }
  
  interface Payment {
    amount: number;
    id: string;
    discount?: number;
    status: string;
    method: string;
    installments?: number;
    date?: string;
  }
  
  interface Resume {
    amount: number;
    original_amount: number;
    products_amount: number;
  }
  
  interface DeliveryHistoryItem {
      address: Address;
      track_url?: string;
      status: string;
      track_id?: string;
      type: string;
      amount: number;
      delivery_forecast?: Date;
  }
  
  interface Delivery {
    address: Address;
    track_url?: string;
    status: string;
    track_id?: string;
    type: string;
    amount: number;
    delivery_forecast?: Date;
    history?: DeliveryHistoryItem[];
  }
  
  interface Coupon {
    id?: string;
    code?: string;
    name?: string;
    discount?: number;
    type?: string;
  }
  
  interface Product {
    id: string;
    seller_id: string;
    product_seller_id: string;
    name: string;
    coupon?: Coupon;
    quantity: number;
    sku: string;
    status: string;
    image?: string;
    amount: number;
    total: number;
  }
  
  interface Order {
    _id: string;
    status: string;
    customer: Customer;
    seller: Seller;
    payment: Payment;
    resume: Resume;
    delivery: Delivery;
    products: Product[];
  }
  
  export type { Order, Customer, Seller, Payment, Resume, Delivery, Product, Coupon, Address, DeliveryHistoryItem };