"use server"
import { unstable_cache } from "next/cache"
import { getCollection } from "../lib/db/connect"

export const getNotes = unstable_cache(async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  console.log("GET new notes")
  const notesCollection = await getCollection("notes")
  const notes = await notesCollection.find().toArray()
  // Convert MongoDB documents to plain objects and ensure _id is a string
  return notes.map(note => ({
    ...note,
    _id: note._id.toString(),
  }))
},
  ["notes"],
  {
    tags: ["notes"],
    revalidate: 3600,
  }
)