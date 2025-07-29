import Link from "next/link";
import { Suspense } from "react";
import { getNotes } from "./data/get-notes";

export default async function Home() {

  return (
    <div className="container mx-auto w-8xl">
      <main className="flex flex-col items-start gap-6">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <h2 className="text-2xl">Notes: </h2>
        <Link className="border rounded-lg p-3" href={"/form"}>Mutation</Link>
        <Suspense fallback={<p>Loading...</p>}>
          <NoteList />
        </Suspense>
      </main>
    </div>
  );
}

async function NoteList() {

  const notes = await getNotes()

  return (
    <div className="flex flex-col w-full">
      {notes.map((note: any) => (
        <div key={note._id} className="text-lg p-2 flex justify-between gap-2 w-full">
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