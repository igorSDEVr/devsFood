import { ProductsReducerType } from '../../types/ProductsReducerType';
import { ReducerActionType } from '../../types/ReducerActionType';

export const productsInitialState: ProductsReducerType = {
    isFilteredList: false,
    search: '',
    categorie: 0,
    data: [{
      id: 0,
      id_cat: 0,
      name: '',
      image: '',
      price: 0,
      ingredients: '',
      points: 0
    }],
    filteredData: [{
      id: 0,
      id_cat: 0,
      name: '',
      image: '',
      price: 0,
      ingredients: '',
      points: 0
    }]
};

enum actionType {
  addProducts = 'ADD_PRODUCTS',
  searchByName = 'SEARCH_BY_NAME',
  searchByCategorie = 'SEARCH_BY_CATEGORIE',
  resetCategory = 'RESET_CATEGORY'
};

export const productsReducer = (state: ProductsReducerType, action: ReducerActionType) => {
  
  const products = state;
  
  switch(action.type) {

    case actionType.addProducts:
      products.isFilteredList = false;
      products.data.push({
        ...action.payload.data
      });

      if(products.data[0].name === '') products.data.shift();
      
      return {...state};

    case actionType.searchByName:
      products.isFilteredList = true;
      products.filteredData = [{
      id: 0,
      id_cat: 0,
      name: '',
      image: '',
      price: 0,
      ingredients: '',
      points: 0
    }];
      const search = action.payload.search;
      products.search = search;
      
      const filterSearch = products.data.map(product => product.name.includes(search));
      filterSearch.map((inSearch, index) => {
        if(inSearch) {
          products.filteredData.push(
            products.data[index]
          );
        };
        return null;
      });

      products.filteredData.shift();
      return {...state};

    case actionType.searchByCategorie:
      products.isFilteredList = true;
      products.filteredData = [{
        id: 0,
        id_cat: 0,
        name: '',
        image: '',
        price: 0,
        ingredients: '',
        points: 0
      }];
      const idSearched = action.payload.categorie;
      products.categorie = idSearched;
      const filterCat = products.data.map(product => product.id_cat === idSearched);
      filterCat.map((inSearch, index) => {
        if(inSearch) {
          products.filteredData.push(
            products.data[index]
          );
        };
        return null;
      });
      products.filteredData.shift();
      return {...state}

    case 'RESET_CATEGORY':
      products.isFilteredList = false;
      return state;

    default:
      return state;
  };
};