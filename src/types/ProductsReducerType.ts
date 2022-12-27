export type ProductsReducerType = {
    isFilteredList: boolean;
    search: string;
    categorie: number;
    data: [{
      id: number;
      id_cat: number;
      name: string;
      image: string;
      price: number;
      ingredients: string;
      points: number;
    }];
    filteredData: [{
      id: number;
      id_cat: number;
      name: string;
      image: string;
      price: number;
      ingredients: string;
      points: number;
    }]
};