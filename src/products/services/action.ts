import { productsApi } from "../api/productsApi";
import type { Product } from "../interfaces/products";

interface GetProductsOptions {
    filterKey?: string;
}

const sleep = (seconds: any) =>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 2)
    })
}

export const getProducts = async ({ filterKey }: GetProductsOptions) => {

    const filterUrl = (filterKey) ? `category=${filterKey}` : ""

    const { data } = await productsApi.get<Product[]>(`/products?${filterUrl}`)
    return data
}


export const getProduct = async (id: number) => {


    const { data } = await productsApi.get<Product>(`/products/${id}`)
    return data
}

interface ProductLike {
    id?: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}


export const createProduct = async (bpdy: ProductLike) => {

    const { data } = await productsApi.post('/products', bpdy)
    return data
}



