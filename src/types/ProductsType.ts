export type ProductsType = {
  error: string;
  result: {
    total: number;
    page: number;
    pages: number;
    data: [{
      id: number;
      id_cat: number;
      name: string;
      image: string;
      price: number;
      ingredients: string;
      points: number;
    }];
  };
};