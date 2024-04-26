import { useParams } from "react-router-dom"
import { useProduct } from "../hooks/useProduct"
import { ProductCard } from "../components/ProductCard"



export const ProductPage = () => {
    const {id} = useParams()
const {isLoading, product} = useProduct({id: Number(id)})

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Producto</h1>

        {
            isLoading && <p>Cargando.....</p>
        }

        {
            product && <ProductCard product={product} />
        }


    </div>
  )
}