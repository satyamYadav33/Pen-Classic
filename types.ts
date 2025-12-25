export interface Pen {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export type SectionType = 'home' | 'products' | 'about' | 'contact';

export interface CartItem extends Pen {
  quantity: number;
}