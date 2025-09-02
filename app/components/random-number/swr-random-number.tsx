"use client"

import { getRandomNumber } from "@/app/data/get-random-number"
import useSWR, { mutate } from "swr"
import { LoaderSpinner } from "../loader-spinner"

export default function SwrRandomNumber() {
	const { data, error, isValidating } = useSWR(
		"swr-random-number",
		getRandomNumber
	)

	return (
		<div className="flex flex-col gap-1 w-full border">
			<div className="text-xl font-bold flex justify-between items-center gap-1">
				SWR
				{isValidating && <LoaderSpinner />}
				<button
					className="border rounded-lg p-3"
					onClick={() => mutate("swr-random-number")}
				>
					revalidate
				</button>
			</div>
			{/* si haces fallback en SWRConfig, no pongas el loading */}
			{/* {isLoading && <p>Loading SWR Random num</p>} */}
			{error && <p>Error: {error.message}</p>}
			<div className="flex gap-1 items-center">{data}</div>
		</div>
	)
}
