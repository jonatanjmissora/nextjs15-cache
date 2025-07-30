import Link from "next/link";
import { Suspense } from "react";
import { getAssets } from "../../data/get-assets";
import { AssetsPromiseResponse, CloudinaryAsset } from "../../lib/types";

export default function CloudinaryPage() {
  return (
    <div className="container mx-auto w-5xl 2xl:w-8xl">
      <main className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-10">
          <span className="text-3xl font-bold">Cloudinary</span>
          <span>"Assets de Cloudinary, {"<"}Suspense{">"} y un getAssets() con un unstable_cache"</span>
        </div>
        <Link className="border rounded-lg p-3" href={"/form"}>Mutation</Link>
        <Suspense fallback={<p>Loading...</p>}>
          <AssetsList />
        </Suspense>
      </main>
    </div>
  )
}

export async function AssetsList() {
  
    const {success, response: assets, message} = await getAssets() as AssetsPromiseResponse
  
    return (
      <div className="flex flex-col w-full">
        {assets.map((asset) => (
          <div key={asset.public_id} className="2xl:text-lg text-xs p-2 flex justify-between gap-2 w-full">
            <span className="font-bold">name: {asset.public_id}</span> 
            <span className="font-bold">format: {asset.format}</span>
            <span className="font-bold">width: {asset.width}</span>
            <span className="font-bold">height: {asset.height}</span>
          </div>
        ))}
      </div>
    )
  }
