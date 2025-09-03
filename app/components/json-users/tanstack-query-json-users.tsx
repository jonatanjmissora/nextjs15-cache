"use client"

import { LoaderSpinner } from "../loader-spinner"
import useGetRqJsonUsers from "@/app/data/tankstack-query/use-get-rq-json-users"

export default function TanstackQueryJsonUsers() {
    const { data, error, isRefetching, isPending, refetch } = useGetRqJsonUsers()

    return (
        <div className="flex flex-col gap-1 w-full border">
            <div className="text-xl font-bold flex justify-between items-center gap-1">
                TS Query
                {isRefetching && <LoaderSpinner />}
                <button
                    className="border rounded-lg p-3"
                    onClick={() => refetch()}
                >
                    revalidate
                </button>
            </div>
            {isPending && <p>Loading Tankstack Query Json users</p>}
            {error && <p>Error: {error.message}</p>}
            {data?.map(user => (
                <span key={user.id} className="font-bold">
                    {user.name}
                </span>
            ))}
        </div>
    )
}
