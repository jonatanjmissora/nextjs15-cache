import { getMongoNotes } from "@/app/data/get-mongo-notes"
import { MongoNoteType } from "@/app/lib/types"

async function SimpleFetchMongoDb() {

    const notes = await getMongoNotes() as MongoNoteType[]

  return (
    <div className="flex flex-col gap-1 w-full border">
        <span className="text-xl font-bold">Simple Fetch</span>
        {notes.map((note) => (
          <span key={note._id} className="font-bold">{note.title}</span> 
        ))}
      </div>
  )
}

export default SimpleFetchMongoDb