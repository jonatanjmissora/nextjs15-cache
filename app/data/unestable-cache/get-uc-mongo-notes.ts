import { unstable_cache } from "next/cache"
import { getMongoNotes } from "../get-mongo-notes"

export const getCachedMongoNotes = unstable_cache(
	async () => {
		console.log("unstable_cache: getting fresh data")
		return await getMongoNotes()
	},
	["notes"],
	{
		tags: ["notes"],
		revalidate: 15,
	}
)
