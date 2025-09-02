import useSWR, { mutate } from "swr"
import { getCloudinary } from "../get-assets"
import { AssetsPromiseResponse } from "../../lib/types"

const getCloudinaryFn = () => {
	console.log("swr: getting fresh data")
	return getCloudinary() as Promise<AssetsPromiseResponse>
}

export default function useGetSwrCloudinary() {
	const { data, error, isValidating } = useSWR(
		"swr-cloudinary",
		getCloudinaryFn
	)

	return { data, error, isValidating, mutate }
}
