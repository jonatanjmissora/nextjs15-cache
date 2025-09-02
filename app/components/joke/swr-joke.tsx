"use client"

import { LoaderSpinner } from "../loader-spinner"
import useGetSwrJoke from "@/app/data/swr/use-get-swr-joke"

export default function SwrJoke() {
	const { data, error, isValidating, mutate } = useGetSwrJoke()

	return (
		<div className="flex flex-col gap-1 w-full border">
			<div className="text-xl font-bold flex justify-between items-center gap-1">
				SWR
				{isValidating && <LoaderSpinner />}
				<button
					className="border rounded-lg p-3"
					onClick={() => mutate("swr-joke")}
				>
					revalidate
				</button>
			</div>
			{/* si haces fallback en SWRConfig, no pongas el loading */}
			{/* {isLoading && <p>Loading SWR Joke</p>} */}
			{error && <p>Error: {error.message}</p>}
			<p className="font-bold">{data?.setup}</p>
			<p className="font-bold">{data?.punchline}</p>
		</div>
	)
}
