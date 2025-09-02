import SimpleFetchJoke from "@/app/components/joke/simple-fetch-joke"
import SwrJoke from "@/app/components/joke/swr-joke"
import UnestableCacheJoke from "@/app/components/joke/unestable-cache-joke"
import { getJoke } from "@/app/data/get-joke"
import { Suspense } from "react"
import { SWRConfig } from "swr"

export default function JokeHome() {
	return (
		<div className="container mx-auto w-5xl 2xl:w-8xl">
			<main className="grid grid-cols-4 gap-1">
				<Suspense fallback={<p>Loading simple mongodb...</p>}>
					<SimpleFetchJoke />
				</Suspense>

				<Suspense fallback={<p>Loading unstable cache mongodb...</p>}>
					<UnestableCacheJoke />
				</Suspense>

				<SWRConfig
					value={{
						fallback: {
							"swr-joke": getJoke(),
						},
					}}
				>
					<SwrJoke />
				</SWRConfig>

				{/* <TankStackQueryJoke />  */}
			</main>
		</div>
	)
}
