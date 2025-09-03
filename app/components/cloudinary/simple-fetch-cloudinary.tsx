import { AssetsPromiseResponse } from "@/app/lib/types"
import { getCloudinary } from "@/app/data/get-assets"

async function SimpleFetchCloudinary() {
	const { response: assets } = (await getCloudinary()) as AssetsPromiseResponse

	return (
		<div className="flex flex-col gap-1 w-full border">
			<span className="text-xl font-bold">Simple Fetch</span>
			{assets.map(asset => (
				<span key={asset.public_id} className="font-bold truncate">
					{asset.display_name}
				</span>
			))}
		</div>
	)
}

export default SimpleFetchCloudinary
