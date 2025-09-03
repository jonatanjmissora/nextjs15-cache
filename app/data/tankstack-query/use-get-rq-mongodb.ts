import { useQuery } from "@tanstack/react-query"
import { getMongoNotes } from "../get-mongo-notes"
import { MongoNoteType } from "@/app/lib/types"

const getMongoNotesFn = () => {
    console.log("tanstack-query: getting fresh data")
    return getMongoNotes() as Promise<MongoNoteType[]>
}

export default function useGetRqMongodb() {
    const { data, error, isRefetching, isPending, refetch } = useQuery({
        queryKey: ["mongodb"],
        queryFn: getMongoNotesFn,
    })

    return {
        data,
        error,
        isRefetching,
        isPending,
        refetch,
    }
}