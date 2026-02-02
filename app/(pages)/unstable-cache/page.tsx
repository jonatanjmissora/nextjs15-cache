import { Suspense } from "react"
import { UnestableCachedRandomNumber } from "@/app/components/random-number/unestable-cache-random-number"
import { UnestableCacheMongoDb } from "@/app/components/mongo-db/unestable-cache-mongodb"
import UnestableCachedJsonUsers from "@/app/components/json-users/unestable-cache-json-users"
import UnestableCachedJoke from "@/app/components/joke/unestable-cache-joke"

export default function UnstableCachePage() {
    return (
        <div className="container mx-auto w-5xl 2xl:w-8xl">
            <main className="flex flex-col gap-4">

                <Suspense fallback={<p>Loading simple random number...</p>}>
                    <UnestableCachedRandomNumber />
                </Suspense>

                <Suspense fallback={<p>Loading simple joke...</p>}>
                    <UnestableCachedJoke />
                </Suspense>

                <Suspense fallback={<p>Loading simple mongodb...</p>}>
                    <UnestableCacheMongoDb />
                </Suspense>

                <Suspense fallback={<p>Loading simple json...</p>}>
                    <UnestableCachedJsonUsers />
                </Suspense>

                
            </main>
        </div>
    )
}