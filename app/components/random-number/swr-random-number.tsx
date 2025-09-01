"use client"

import { getRandomNumber } from '@/app/data/get-random-number'
import useSWR from 'swr'

export default function SwrRandomNumber() {
  const { data, error, isLoading } = useSWR('swr-random-number', getRandomNumber)

  return (
    <div className="flex flex-col gap-1 w-full border">
      <span className="text-xl font-bold">SWR</span>
      {isLoading && <p>Loading SWR Random num</p>}
      {error && <p>Error: {error.message}</p>}
      <p>{data}</p>
    </div>
  )
}