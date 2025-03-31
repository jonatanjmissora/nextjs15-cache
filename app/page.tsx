import Link from "next/link";
import { Suspense } from "react";
import NotesContainer from "./components/NotesContainer";

export default async function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl">Home</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <NotesContainer />
        </Suspense>
        <Link href={"/form"}>Mutation</Link>
      </main>
    </div>
  );
}