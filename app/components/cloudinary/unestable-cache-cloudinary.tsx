import { AssetsPromiseResponse } from "@/app/lib/types"
import { getCachedCloudinary } from "@/app/data/unestable-cache/get-uc-assets"

async function UnestableCacheCloudinary() {

    const {response: assets} = await getCachedCloudinary() as AssetsPromiseResponse

  return (
    <div className="flex flex-col gap-1 w-full border">
        <span className="text-xl font-bold">Unestable Cache</span>
        {assets.map((asset) => (
            <span key={asset.public_id} className="font-bold truncate">{asset.display_name}</span> 
        ))}
      </div>
  )
}

export default UnestableCacheCloudinary