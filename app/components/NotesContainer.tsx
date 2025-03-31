import { unstable_cache } from "next/cache"
import { getCollection } from "../lib/db/connect"

const getCached = unstable_cache(async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log("GET new notes")
    const notesCollection = await getCollection("notes")
    return await notesCollection.find().toArray()
  },
    ["randomNumber"],
    {
      tags: ["randomNumber"],
      revalidate: 3600,
    }
  )

export default async function NotesContainer() {

  const notes = await getCached()

    return <p>notes : {JSON.stringify(notes)}</p>
}