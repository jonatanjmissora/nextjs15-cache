import useSWR, { mutate } from "swr"
import { getJsonUser } from "../get-json-user"
import { JsonUserType } from "@/app/lib/types"

const getJsonUsersFn = () => {
	console.log("swr: getting fresh data")
	return getJsonUser() as Promise<JsonUserType[]>
}

export default function useGetSwrJsonUsers() {
	const { data, error, isValidating } = useSWR(
		"swr-json-users", 
		getJsonUsersFn,
		{
			fallbackData: undefined,
			revalidateOnMount: true,
		}
	)

	return { data, error, isValidating, mutate }
}
