"use client"

import { LoaderSpinner } from "../loader-spinner"
import useGetRqMongodb from "@/app/data/tankstack-query/use-get-rq-mongodb"

export default function TanStackQueryMongoDb() {
    const { data, error, isRefetching, isPending, refetch } = useGetRqMongodb()

    return (
        <div className="flex flex-col gap-1 w-full">
            <div className="text-xl font-bold flex justify-between items-center gap-1">
                <span className="font-bold underline">SWR</span>
                {isRefetching && <LoaderSpinner />}
                <button
                    className="border rounded-lg p-3"
                    onClick={() => refetch()}
                >
                    revalidate
                </button>
            </div>
            {isPending && <p>Loading Tankstack Query mongodb</p>}
            {error && <p>Error: {error.message}</p>}
            <div className="flex flex-wrap gap-2">
            {data?.map(note => (
				<span key={note._id} className="font-bold">
					{note.title}
				</span>
			))}
            </div>
        </div>
    )
}
