import useSWR, { mutate } from "swr"
import { getRandomNumber } from "../get-random-number"

const getRandomNumberFn = () => {
	console.log("swr: getting fresh data")
	return getRandomNumber()
}

export default function useGetSwrRandomNumber() {
	const { data, error, isValidating } = useSWR(
		"swr-random-number",
		getRandomNumberFn
	)

	return { data, error, isValidating, mutate }
}
