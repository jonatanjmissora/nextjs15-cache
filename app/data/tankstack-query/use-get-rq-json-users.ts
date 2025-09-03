import { useQuery } from "@tanstack/react-query"
import { getJsonUser } from "../get-json-user"
import { JsonUserType } from "@/app/lib/types"

const getJsonUserFn = () => {
    console.log("tanstack-query: getting fresh data")
    return getJsonUser() as Promise<JsonUserType[]>
}

export default function useGetRqJsonUsers() {
    const { data, error, isRefetching, isPending, refetch } = useQuery({
        queryKey: ["json-users"],
        queryFn: getJsonUserFn,
    })

    return {
        data,
        error,
        isRefetching,
        isPending,
        refetch,
    }
}