"use client"

import { getCloudinary } from '@/app/data/get-assets'
import useSWR from 'swr'

export default function SwrCloudinary() {
  const { data, error, isLoading } = useSWR('swr-cloudinary', getCloudinary)

  return (
    <div className="flex flex-col gap-1 w-full border">
      <span className="text-xl font-bold">SWR</span>
      {isLoading && <p>Loading SWR Cloudinary</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.response.map((asset) => (
        <span key={asset.public_id} className="font-bold">name: {asset.display_name}</span> 
      ))}
    </div>
  )
}