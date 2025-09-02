"use server"

import { unstable_cache } from "next/cache"
import { AssetsPromiseResponse, CloudinaryAsset } from "../../lib/types"
import { getCloudinary } from "../get-assets"

export const getCachedCloudinary = unstable_cache(
	async (): Promise<{
		success: boolean
		response: CloudinaryAsset[]
		message: string
	}> => {
		console.log("unstable_cache: getting fresh data")
		return (await getCloudinary()) as AssetsPromiseResponse
	},
	["assets"],
	{
		tags: ["assets"],
		revalidate: 15,
	}
)
