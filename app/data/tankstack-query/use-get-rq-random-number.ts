import { useQuery } from "@tanstack/react-query"
import { getRandomNumber } from "../get-random-number"

const getRandomNumberFn = () => {
	console.log("tanstack-query: getting fresh data")
	return getRandomNumber()
}

export default function useGetRqRandomNumber() {
	const { data, error, isRefetching, isPending, refetch } = useQuery({
		queryKey: ["random-number"],
		queryFn: getRandomNumberFn,
		// staleTime: 15 * 1000,
		refetchInterval: 15 * 1000,
		refetchIntervalInBackground: true,
		refetchOnWindowFocus: false,
	})

	return {
		data,
		error,
		isRefetching,
		isPending,
		refetch,
	}
}
