import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { useMutation, QueryClient, useQueryClient } from '@tanstack/react-query';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { createProduct } from "../services/action";

interface FormInputs {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}


export const NewProduct = () => {
  const QueryClient = useQueryClient()
  const prodctMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) =>{
      QueryClient.invalidateQueries({queryKey: ["products", {'filterKey': data.category}]})
    }
  })


  const { control, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      category: "men's clothing",
      image: ""
    }
  });

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
    console.log("data", data)
    prodctMutation.mutate(data)
  }

  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>

        <div className="flex justify-around items-center">

          <div className="flex-col w-[500px]">
            <Controller
              control={control}
              name="title"
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} className="mt-2" type="text" label="Titulo del producto" />)
              }
            />

            <Controller
              control={control}
              name="price"
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} value={field.value?.toString()} className="mt-2" type="number" label="Precio del producto" />)
              }
            />

            <Controller
              control={control}
              name="image"
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} className="mt-2" type="url" label="Url del producto" />)
              }
            />

            <Controller
              control={control}
              name="description"
              rules={{ required: true }}
              render={({ field }) => (
                <Textarea {...field} className="mt-2" label="Descripcion del producto" />)
              }
            />

            <Controller
              control={control}
              name="category"
              rules={{ required: true }}
              render={({ field }) => (
                <select {...field} className="rounded-md p-3 mt-2 bg-gray-800 w-full">
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Women's clothing</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                </select>)
              }
            />




            <br />
            <Button

            className="mt-2" type="submit" color="primary">{prodctMutation.isPending ? "Cargando...." : "Crear Producto"}</Button>
          </div>

          <div className="bg-white rounded-2xl p-10 flex items-center" style={{
            width: '500px',
            height: '600px',
          }}>

            <Image
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            />
          </div>

        </div>


      </form>

    </div>
  )
}