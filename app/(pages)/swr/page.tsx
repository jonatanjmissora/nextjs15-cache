import SwrRandomNumber from "@/app/components/random-number/swr-random-number"
import SwrJoke from "@/app/components/joke/swr-joke"
import SwrMongoDb from "@/app/components/mongo-db/swr-mongodb"
import SwrJsonUsers from "@/app/components/json-users/swr-json-users"
import { SWRConfig } from "swr"
import { getRandomNumber } from "@/app/data/get-random-number"
import { getJoke } from "@/app/data/get-joke"
import { getMongoNotes } from "@/app/data/get-mongo-notes"
import { getJsonUser } from "@/app/data/get-json-user"

export default function page() {
  return (
    <div className="container mx-auto w-5xl 2xl:w-8xl">
      <main className="flex flex-col gap-4">

        <SWRConfig
            value={{
              fallback: {
                "swr-random-number": getRandomNumber(),
              },
            }}
        >
          <SwrRandomNumber />
        </SWRConfig>

        <SWRConfig
            value={{
              fallback: {
                "swr-joke": getJoke(),
              },
            }}
        >
          <SwrJoke />
        </SWRConfig>

        <SWRConfig
            value={{
              fallback: {
                "swr-mongodb": getMongoNotes(),
              },
            }}
        >
          <SwrMongoDb />
        </SWRConfig>

        <SWRConfig
            value={{
              fallback: {
                "swr-json-users": getJsonUser(),
              },
            }}
        >
          <SwrJsonUsers />
        </SWRConfig>         
                
      </main>
    </div>
  )
}