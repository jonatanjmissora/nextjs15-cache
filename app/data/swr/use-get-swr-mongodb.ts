import useSWR, { mutate } from "swr"
import { getMongoNotes } from "../get-mongo-notes"
import { MongoNoteType } from "@/app/lib/types"

const getMongoNotesFn = () => {
	console.log("swr: getting fresh data")
	return getMongoNotes() as Promise<MongoNoteType[]>
}

export default function useGetSwrMongoNotes() {
	const { data, error, isValidating } = useSWR(
		"swr-mongodb", 
		getMongoNotesFn,
		{
			fallbackData: undefined,
			revalidateOnMount: true,
		}
	)

	return { data, error, isValidating, mutate }
}
