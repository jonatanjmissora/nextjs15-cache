"use client"

import { getMongoNotes } from "@/app/data/get-mongo-notes"
import { MongoNoteType } from "@/app/lib/types"
import useSWR from "swr"
import { LoaderSpinner } from "../loader-spinner"

export default function SwrMongoDb() {
	const { data, error, isLoading, isValidating } = useSWR<MongoNoteType[]>(
		"swr-mongodb",
		getMongoNotes as () => Promise<MongoNoteType[]>
	)

	return (
		<div className="flex flex-col gap-1 w-full border">
			<div className="text-xl font-bold flex items-center gap-1">
				SWR
				{isValidating && <LoaderSpinner />}
			</div>
			{isLoading && <p>Loading SWR MongoDb</p>}
			{error && <p>Error: {error.message}</p>}
			{data?.map(note => (
				<span key={note._id} className="font-bold">
					title: {note.title}
				</span>
			))}
		</div>
	)
}
