import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient()

interface Props{
    children: any
}

export const TakStackProvider = ({children}: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
           {children}
        </QueryClientProvider>
    )
}
