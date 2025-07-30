import Link from "next/link";
import { Suspense } from "react";
import { getMongoNotes } from "./data/get-mongo-notes";
import { MongoNoteType } from "./lib/types";

export default function Home() {

  return (
    <div className="container mx-auto w-5xl 2xl:w-8xl">
      <main className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-10">
          <span className="text-3xl font-bold">Mongo DB</span>
          <span>"Utilizamos una coleccion de Mongo DB Atlas, {"<"}Suspense{">"} y un getNotes() con un unstable_cache"</span>
        </div>
        <Link className="border rounded-lg p-3" href={"/form"}>Mutation</Link>
        <Suspense fallback={<p>Loading...</p>}>
          <NoteList />
        </Suspense>
      </main>
    </div>
  );
}

  export async function NoteList() {
  
    const notes = await getMongoNotes() as MongoNoteType[]
  
    return (
      <div className="flex flex-col w-full">
        {notes.map((note) => (
          <div key={note._id} className="text-xs 2xl:text-lg p-2 flex justify-between gap-2 w-full">
            <span className="font-bold">title:</span> {note.title}
            <span className="font-bold">content:</span> {note.content}
            <span className="font-bold">author:</span> {note.author}
            <span className="font-bold">pinned:</span> {note.pinned ? "Pinned" : "Not Pinned"}
            <span className="font-bold">id:</span> {note._id}
          </div>
        ))}
      </div>
    )
  }