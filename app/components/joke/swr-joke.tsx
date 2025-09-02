"use client"

import { getJoke } from "@/app/data/get-joke"
import { JokeType } from "@/app/lib/types"
import useSWR, { mutate } from "swr"
import { LoaderSpinner } from "../loader-spinner"

export default function SwrJoke() {
	const { data, error, isValidating } = useSWR(
		"swr-joke",
		getJoke as () => Promise<JokeType>
	)

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
