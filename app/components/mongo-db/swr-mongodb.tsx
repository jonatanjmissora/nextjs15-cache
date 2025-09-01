"use client"

import { getMongoNotes } from '@/app/data/get-mongo-notes'
import { MongoNoteType } from '@/app/lib/types'
import useSWR from 'swr'

export default function SwrMongoDb() {
  const { data, error, isLoading } = useSWR<MongoNoteType[]>('swr-mongodb', getMongoNotes as () => Promise<MongoNoteType[]>)

  return (
    <div className="flex flex-col gap-1 w-full border">
      <span className="text-xl font-bold">SWR</span>
      {isLoading && <p>Loading SWR MongoDb</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.map((note) => (
        <span key={note._id} className="font-bold">title: {note.title}</span> 
      ))}
    </div>
  )
}

