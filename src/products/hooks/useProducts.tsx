import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/action";

interface Options {
    filterKey?: string;
}

export const useProducts = ({ filterKey }: Options) => {

    const { isLoading, isError, error, data: products = [], isFetching } = useQuery({ queryKey: ['todos', { filterKey }], queryFn: () => getProducts({ filterKey }), staleTime: 1000 * 60 * 60 })

    return {
        error,
        isError,
        isFetching,
        isLoading,
        products
    }
}
