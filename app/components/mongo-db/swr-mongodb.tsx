"use client"

import { LoaderSpinner } from "../loader-spinner"
import useGetSwrMongoNotes from "@/app/data/swr/use-get-swr-mongodb"

export default function SwrMongoDb() {
	const { data, error, isValidating, mutate } = useGetSwrMongoNotes()

	return (
		<div className="flex flex-col gap-1 w-full">
			<div className="text-xl font-bold flex justify-between items-center gap-1">
				<span className="font-bold underline">SWR</span>
				{isValidating && <LoaderSpinner />}
				<button
					className="border rounded-lg p-3"
					onClick={() => mutate("swr-mongodb")}
				>
					revalidate
				</button>
			</div>
			{/* si haces fallback en SWRConfig, no pongas el loading */}
			{/* {isLoading && <p>Loading SWR MongoDb</p>} */}
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
