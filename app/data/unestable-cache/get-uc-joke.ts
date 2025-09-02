import { unstable_cache } from "next/cache"
import { getJoke } from "../get-joke"

export const getCachedJoke = unstable_cache(
	async () => {
		console.log("unstable_cache")
		return await getJoke()
	},
	["joke"],
	{
		tags: ["joke"],
		revalidate: 15,
	}
)
