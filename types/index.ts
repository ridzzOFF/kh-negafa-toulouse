export type ProductCategory = 'caftan' | 'takchita' | 'karakou' | 'robe-mariee';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  sizes: string[];
  available: boolean;
  description: string;
  fabric: string;
  embroidery: string;
  beading: string;
  cautionAmount: string;
  rentalPrice: string;
}
