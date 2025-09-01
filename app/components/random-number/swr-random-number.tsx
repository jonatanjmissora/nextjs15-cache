"use client"

import { getRandomNumber } from "@/app/data/get-random-number"
import useSWR from "swr"
import { LoaderSpinner } from "../loader-spinner"

export default function SwrRandomNumber() {
	const { data, error, isLoading, isValidating } = useSWR(
		"swr-random-number",
		getRandomNumber
		// { fallbackData: "0.3" }
	)

	return (
		<div className="flex flex-col gap-1 w-full border">
			<div className="text-xl font-bold flex items-center gap-1">
				SWR
				{isValidating && <LoaderSpinner />}
			</div>
			{isLoading && <p>Loading SWR Random num</p>}
			{error && <p>Error: {error.message}</p>}
			<div className="flex gap-1 items-center">{data}</div>
		</div>
	)
}
