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