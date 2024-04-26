import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { getProduct } from '../services/action';


export const usePrefetchProduct = () => {

    const QueryClient = useQueryClient()

    const preFetchProduct = async (id: number) => {
        QueryClient.prefetchQuery({
            queryKey: ["product", id],
            queryFn: () => getProduct(id),
            staleTime: 10000,
        });
    }

    return preFetchProduct
}
