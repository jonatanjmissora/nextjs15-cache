"use client"

import { LoaderSpinner } from "../loader-spinner"
import useGetSwrCloudinary from "@/app/data/swr/use-get-swr-cloudinary"

export default function SwrCloudinary() {
	const { data, error, isValidating, mutate } = useGetSwrCloudinary()

	return (
		<div className="flex flex-col gap-1 w-full border">
			<div className="text-xl font-bold flex justify-between items-center gap-1">
				SWR
				{isValidating && <LoaderSpinner />}
				<button
					className="border rounded-lg p-3"
					onClick={() => mutate("swr-cloudinary")}
				>
					revalidate
				</button>
			</div>
			{/* si haces fallback en SWRConfig, no pongas el loading */}
			{/* {isLoading && <p>Loading SWR Cloudinary</p>} */}
			{error || (!data?.success && <p>Error: {error?.message}</p>)}
			{data?.response.map(asset => (
				<span key={asset.public_id} className="font-bold">
					name: {asset.display_name}
				</span>
			))}
		</div>
	)
}
