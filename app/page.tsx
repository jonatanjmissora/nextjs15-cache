import Link from "next/link";
import NoteList from "./components/NoteList";

export default async function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <h2 className="text-2xl">Notes: </h2>
        <NoteList />
        <Link className="border p-3" href={"/form"}>Mutation</Link>
      </main>
    </div>
  );
}