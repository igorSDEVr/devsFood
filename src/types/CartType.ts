export type CartType = {
  products: [{
    id: number;
    id_cat: number;
    name: string;
    image: string;
    price: number;
    ingredients: string;
    qt: number;
  }]
};