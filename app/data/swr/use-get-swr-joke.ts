import useSWR, { mutate } from "swr"
import { getJoke } from "../get-joke"

const getJokeFn = () => {
	console.log("swr: getting fresh data")
	return getJoke()
}

export default function useGetSwrJoke() {
	const { data, error, isValidating } = useSWR(
		"swr-joke", 
		getJokeFn,
		{
			fallbackData: undefined,
			revalidateOnMount: true,
		}
	)

	return { data, error, isValidating, mutate }
}
