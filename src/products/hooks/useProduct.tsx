import { useQuery } from "@tanstack/react-query";
import { getProduct, getProducts } from "../services/action";

interface Options {
    id: number;
}

export const useProduct = ({ id }: Options) => {

    const { isLoading, isError, error, data: product, isFetching } = useQuery({ queryKey: ['todos', id], queryFn: () => getProduct(id),  })

    return {
        error,
        isError,
        isFetching,
        isLoading,
        product
    }
}
