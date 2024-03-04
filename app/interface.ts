export interface simplifiedProduct {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  slug: string;
  category: string;
}
export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  category: string;
  name: string;
  description: string;
  price_id: string;
}
