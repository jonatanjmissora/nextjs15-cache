"use client"

import useGetRqJoke from "@/app/data/tankstack-query/use-get-rq-joke"
import { LoaderSpinner } from "../loader-spinner"

export default function TanstackQueryJoke() {
	const { data, error, isRefetching, isPending, refetch } = useGetRqJoke()

	return (
		<div className="flex flex-col gap-1 w-full">
			<div className="text-xl font-bold flex justify-between items-center gap-1">
				<span className="font-bold underline">Unstable cache</span>
				{isRefetching && <LoaderSpinner />}
				<button className="border rounded-lg p-3" onClick={() => refetch()}>
					revalidate
				</button>
			</div>
			{isPending && <p>Loading RQ joke</p>}
			{error && <p>Error: {error.message}</p>}
			<p className="font-bold">{data?.setup}</p>
			<p className="font-bold">{data?.punchline}</p>
		</div>
	)
}
