"use client"

import useGetRqCloudinary from "@/app/data/tankstack-query/use-get-rq-cloudinary"
import { LoaderSpinner } from "../loader-spinner"

export default function TanStackQueryCloudinary() {
    const { data, error, isRefetching, isPending, refetch } = useGetRqCloudinary()

    return (
        <div className="flex flex-col gap-1 w-full border">
            <div className="text-xl font-bold flex justify-between items-center gap-1">
                TS Query
                {isRefetching && <LoaderSpinner />}
                <button className="border rounded-lg p-3" onClick={() => refetch()}>
                    revalidate
                </button>
            </div>
            {isPending && <p>Loading RQ cloudinary</p>}
            {error && <p>Error: {error.message}</p>}
            {data?.response.map((asset) => (
            <span key={asset.public_id} className="font-bold truncate">{asset.display_name}</span> 
        ))}
        </div>
    )
}