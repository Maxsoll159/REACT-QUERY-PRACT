import { productsApi } from "../api/productsApi";
import type { Product } from "../interfaces/products";

interface GetProductsOptions {
    filterKey?: string;
}

export const getProducts = async ({ filterKey }: GetProductsOptions) => {

    const filterUrl = (filterKey) ? `category=${filterKey}` : ""

    const {data} = await productsApi.get<Product[]>(`/products?${filterUrl}`)
    return data
}


export const getProduct = async (id: number) => {


    const {data} = await productsApi.get<Product>(`/products/${id}`)
    return data
}
