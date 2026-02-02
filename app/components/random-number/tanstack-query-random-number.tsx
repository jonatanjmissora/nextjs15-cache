"use client"

import { LoaderSpinner } from "../loader-spinner"
import useGetRqRandomNumber from "@/app/data/tankstack-query/use-get-rq-random-number"

export default function TanStackQueryRandomNumber() {
	const { data, error, isRefetching, isPending, refetch } =
		useGetRqRandomNumber()
	return (
		<div className="flex flex-col gap-1 w-full">
			<div className="text-xl font-bold flex justify-between items-center gap-1">
				<span className="font-bold underline">Random Number</span>
				{isRefetching && <LoaderSpinner />}
				<button className="border rounded-lg p-3" onClick={() => refetch()}>
					refetch
				</button>
			</div>
			{isPending && <p>Loading RQ Random num</p>}
			{error && <p>Error: {error.message}</p>}
			<div className="flex gap-1 items-center">{data}</div>
		</div>
	)
}
