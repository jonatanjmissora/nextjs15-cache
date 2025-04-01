import { Suspense } from 'react'
import { getNotes } from '../data/get-notes'

export default function NoteList() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <LoadNoteList />
      </Suspense>
    </div>
  )
}

async function LoadNoteList() {

  const notes = await getNotes()

  return <p>notes : {JSON.stringify(notes)}</p>
}
