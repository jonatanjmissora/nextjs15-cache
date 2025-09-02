import { Suspense } from "react"
import SimpleFetchCloudinary from "@/app/components/cloudinary/simple-fetch-cloudinary"
import UnestableCacheCloudinary from "@/app/components/cloudinary/unestable-cache-cloudinary"
import SwrCloudinary from "@/app/components/cloudinary/swr-cloudinary"
import { SWRConfig } from "swr"
import { getCloudinary } from "@/app/data/get-assets"

export default function CloudinaryPage() {
	return (
		<div className="container mx-auto w-5xl 2xl:w-8xl">
			<main className="grid grid-cols-4 gap-1">
				<Suspense fallback={<p>Loading simple cloudinary...</p>}>
					<SimpleFetchCloudinary />
				</Suspense>

				<Suspense fallback={<p>Loading unstable cache cloudinary...</p>}>
					<UnestableCacheCloudinary />
				</Suspense>

				<SWRConfig
					value={{
						fallback: {
							"swr-cloudinary": getCloudinary(),
						},
					}}
				>
					<SwrCloudinary />
				</SWRConfig>

				{/* <TankStackQueryMongoDb /> */}
			</main>
		</div>
	)
}
