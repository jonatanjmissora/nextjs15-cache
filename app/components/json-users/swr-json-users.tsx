"use client"

import { getJsonUser } from '@/app/data/get-json-user'
import { JsonUserType } from '@/app/lib/types'
import useSWR from 'swr'

export default function SwrJsonUsers() {
  const { data, error, isLoading } = useSWR('swr-json-users', getJsonUser as () => Promise<JsonUserType[]>)

  return (
    <div className="flex flex-col gap-1 w-full border">
      <span className="text-xl font-bold">SWR</span>
      {isLoading && <p>Loading SWR Json users</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.map((user) => (
        <span key={user.id} className="font-bold">name: {user.name}</span> 
      ))}
    </div>
  )
}