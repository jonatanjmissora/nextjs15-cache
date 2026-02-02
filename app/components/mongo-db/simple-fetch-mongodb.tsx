import { getMongoNotes } from "@/app/data/get-mongo-notes"
import { MongoNoteType } from "@/app/lib/types"
import { Suspense } from "react"

function SimpleFetchMongoDb() {
	return (
		<div className="flex flex-col gap-1 w-full">
			<span className="text-xl font-bold underline">Mongodb</span>
			<Suspense fallback={<p>Loading mongodb notes...</p>}>
				<SuspendedComponent />
			</Suspense>
		</div>
	)
}

const SuspendedComponent = async () => {
	const notes = (await getMongoNotes()) as MongoNoteType[]
	return (
		<div className="flex flex-col gap-1 w-full">
			<span className="text-xl font-bold underline">Mongodb</span>
			<div className="flex flex-wrap gap-2">
				{notes.map(note => (
					<span key={note._id} className="font-bold">
						{note.title}
					</span>
				))}
			</div>
		</div>
	)
}

export default SimpleFetchMongoDb
