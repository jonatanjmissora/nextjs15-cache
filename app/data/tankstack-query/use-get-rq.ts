import { useQuery } from "@tanstack/react-query"

const getJokeFn = <T>(callback: () => Promise<T>) => {
	console.log("tanstack-query: getting fresh data")
	return callback()
}

export default function useGetRq<T>(
	queryKey: string[],
	callback: () => Promise<T>
) {
	const { data, error, isRefetching, isPending, refetch } = useQuery({
		queryKey,
		queryFn: () => getJokeFn<T>(callback),
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
