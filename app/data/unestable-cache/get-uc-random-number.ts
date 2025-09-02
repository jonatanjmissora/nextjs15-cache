import { unstable_cache } from "next/cache"
import { getRandomNumber } from "../get-random-number"

export const getCachedRandomNumber = unstable_cache(
	async () => {
		console.log("unstable_cache: getting fresh data")
		return await getRandomNumber()
	},
	["random-number"],
	{
		tags: ["random-number"],
		revalidate: 15,
	}
)
