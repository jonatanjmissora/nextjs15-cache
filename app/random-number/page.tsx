import { unstable_cache } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";

export default function RandomNumberPage() {
  return (
    <div className="container mx-auto w-5xl 2xl:w-8xl">
      <main className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-10">
          <span className="text-3xl font-bold">Random Number</span>
          <span>"{"<"}Suspense{">"} y un getRandomNumber() con un unstable_cache"</span>
        </div>
        <Link className="border rounded-lg p-3" href={"/form"}>Mutation</Link>
        <Suspense fallback={<p>Loading...</p>}>
          <RandomNumber />
        </Suspense>
      </main>
    </div>
  )
}

const RandomNumber = async () => {
    return <p>{await getRandomNumber()}</p>
}

const getRandomNumber = unstable_cache(async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return Math.random()
}, ["random-number"],{
    tags: ["random-number"],
    revalidate: 20,
})
