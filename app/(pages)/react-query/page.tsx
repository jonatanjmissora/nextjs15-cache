import { Suspense } from "react"
import TanStackQueryRandomNumber from "@/app/components/random-number/tanstack-query-random-number"
import TanstackQueryJoke from "@/app/components/joke/tanstack-query-joke"
import TanStackQueryMongoDb from "@/app/components/mongo-db/tanstack-query-mongodb"
import TanstackQueryJsonUsers from "@/app/components/json-users/tanstack-query-json-users"

export default function page() {
  return (
    <div className="container mx-auto w-5xl 2xl:w-8xl">
    <main className="flex flex-col gap-4">

                    <TanStackQueryRandomNumber />

                    <TanstackQueryJoke />

                    <TanStackQueryMongoDb />

                    <TanstackQueryJsonUsers />
                
            </main>
            </div>
  )
}