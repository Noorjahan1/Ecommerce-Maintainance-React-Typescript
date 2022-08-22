export interface TagType {
  minPrice: number;
  maxPrice: number;
  Theme: string[];
  Age: string[];
}
export interface Theme {
  space: boolean;
  ninja: boolean;
  transport: boolean;
  building: boolean;
  homes: boolean;
}
export interface Age {
  "Up to a year": boolean;
  "1year-2years": boolean;
  "3 years -5 years": boolean;
  "6 years -5 years": boolean;
  "Older than 12 years": boolean;
}
export interface TagPropTypes {
  minPrice: number;
  maxPrice: number;
  themes: string[];
  ages: string[];
  
}
export interface Product {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: string;
  currency: string;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number | null;
  category: string;
  product_type: string;
  tag_list: string[];
  created_at: string;
  updated_at: string;
  product_api_url: string;
  api_featured_image: string;
  product_colors: { hex_value: string; colour_name: string }[];
}
export  interface Data {
  id: string;
  name: string;
  price: number;
  image: string;
}
export interface compareProducts{
  compareProducts:Data[]|null
}
export interface compareFunction{
  Compare:Function
}