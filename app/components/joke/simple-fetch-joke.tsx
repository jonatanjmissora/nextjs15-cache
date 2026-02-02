import { getJoke } from "@/app/data/get-joke"
import { JokeType } from "@/app/lib/types"
import { Suspense } from "react"

function SimpleFetchJoke() {
	return (
		<div className="flex flex-col gap-1 w-full">
			<p className="text-xl font-bold underline">Joke</p>
			<Suspense fallback={<p>Loading simple joke...</p>}>
				<SuspendedComponent />
			</Suspense>
		</div>
	)
}

const SuspendedComponent = async () => {
	const joke = (await getJoke()) as JokeType
	return (
		<Suspense fallback={<p>Loading simple joke...</p>}>
			<p className="font-bold">{joke.setup}</p>
			<p className="font-bold">{joke.punchline}</p>
		</Suspense>
	)
}

export default SimpleFetchJoke
