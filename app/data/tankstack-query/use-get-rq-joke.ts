import { useQuery } from "@tanstack/react-query"
import { getJoke } from "../get-joke"

const getJokeFn = () => {
	console.log("tanstack-query: getting fresh data")
	return getJoke()
}

export default function useGetRqJoke() {
	const { data, error, isRefetching, isPending, refetch } = useQuery({
		queryKey: ["joke"],
		queryFn: getJokeFn,
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
