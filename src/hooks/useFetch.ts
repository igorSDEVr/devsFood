import axios from 'axios';
import { useQuery } from 'react-query';

const api = axios.create({
  baseURL: 'https://api.b7web.com.br/devsfood/api/'
});

export const useFetch = <T = unknown>(url: string) => {

  const { data } = useQuery<T>(url, async () => {
    const response = await api.get(url);
    
    return response.data;
  }, {
    suspense: true
  });

  return { data };

};

{/* 
export default {
    getCategories: async () => {
        const res = await api.get('/categories');
        return res.data;
    },
    getProducts: async (category, page, search) => {
        let fields = {};
        if(category) {
            fields.category = category;
        };

        if(page > 0) {
            fields.category = page;
        };

        if(search) {
            fields.category = search;
        };

        let queryString = new URLSearchParams(fields).toString();
        const res = await api.get('/products?' + queryString);
        return res.data;
    }
}; */}