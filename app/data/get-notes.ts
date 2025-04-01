import "server-only"
import { unstable_cache } from "next/cache"
import { getCollection } from "../lib/db/connect"

export const getNotes = unstable_cache(async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  console.log("GET new notes")
  const notesCollection = await getCollection("notes")
  return await notesCollection.find().toArray()
},
  ["notes"],
  {
    tags: ["notes"],
    revalidate: 3600,
  }
)