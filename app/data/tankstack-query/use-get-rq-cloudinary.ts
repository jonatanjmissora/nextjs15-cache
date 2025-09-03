import { useQuery } from "@tanstack/react-query"
import { getCloudinary } from "../get-assets"
import { AssetsPromiseResponse } from "@/app/lib/types"

const getCloudinaryFn = () => {
    console.log("tanstack-query: getting fresh data")
    return getCloudinary() as Promise<AssetsPromiseResponse>
}

export default function useGetRqCloudinary() {
    const { data, error, isRefetching, isPending, refetch } = useQuery({
        queryKey: ["cloudinary"],
        queryFn: getCloudinaryFn,
    })

    return {
        data,
        error,
        isRefetching,
        isPending,
        refetch,
    }
}