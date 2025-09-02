import SimpleFetchRandomNumber from "@/app/components/random-number/simple-fetch-random-number"
import SwrRandomNumber from "@/app/components/random-number/swr-random-number"
import { UnestableCachedRandomNumber } from "@/app/components/random-number/unestable-cache-random-number"
import { getRandomNumber } from "@/app/data/get-random-number"
import { Suspense } from "react"
import { SWRConfig } from "swr"

export default function RandomNumberPage() {
	return (
		<div className="container mx-auto w-5xl 2xl:w-8xl">
			<main className="grid grid-cols-4 gap-1">
				<Suspense fallback={<p>Loading simple random num...</p>}>
					<SimpleFetchRandomNumber />
				</Suspense>

				<Suspense fallback={<p>Loading unstable cache random num...</p>}>
					<UnestableCachedRandomNumber />
				</Suspense>

				<SWRConfig
					value={{
						fallback: {
							"swr-random-number": getRandomNumber(),
						},
					}}
				>
					<SwrRandomNumber />
				</SWRConfig>

				{/* <TankStackQueryMongoDb /> */}
			</main>
		</div>
	)
}
