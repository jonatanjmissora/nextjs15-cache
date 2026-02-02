import { getCachedMongoNotes } from "@/app/data/unestable-cache/get-uc-mongo-notes"
import { MongoNoteType } from "@/app/lib/types"

export async function UnestableCacheMongoDb() {
  
    const notes = await getCachedMongoNotes() as MongoNoteType[]
  
    return (
      <div className="flex flex-col gap-1 w-full">
        <span className="text-xl font-bold underline">UnestableCache</span>
        <div className="flex flex-wrap gap-2">
          {notes.map((note) => (
            <span key={note._id} className="font-bold">{note.title}</span> 
          ))}
        </div>
      </div>
    )
  }