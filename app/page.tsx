import { unstable_cacheTag } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl">Home</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <SuspenseComponent />
        </Suspense>
        <Link href={"/user/1"}>User1</Link>
        <Link href={"/form"}>Mutation</Link>
      </main>
    </div>
  );
}

async function SuspenseComponent() {
  return <p>{await getRandomNumber()}</p>
}

async function getRandomNumber() {
  "use cache"
  unstable_cacheTag("randomNumber")
  await new Promise(resolve => setTimeout(resolve, 3000))
  return Math.random()
}
