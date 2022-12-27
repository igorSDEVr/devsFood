import axios from 'axios';
import { useQuery } from 'react-query';

const api = axios.create({
  baseURL: 'https://api.b7web.com.br/devsfood/api/'
});

export const useFetch = <T = unknown>(url: string) => {

  const { data, isLoading } = useQuery<T>(url, async () => {
    const response = await api.get(url);
    
    return response.data;
  }, {
    suspense: true,
    staleTime: 1000 * 10 * 60 //10 minutes
  });

  return { data, isLoading };
};