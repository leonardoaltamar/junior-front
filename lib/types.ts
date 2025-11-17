export type ProductCategory = 
  | 'zapatos'
  | 'camisas'
  | 'jeans'
  | 'pantalones'
  | 'camisas-basicas'
  | 'camisas-estampadas'
  | 'gorras'
  | 'relojes';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  images: string[];
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  icon: string;
  image: string;
}
