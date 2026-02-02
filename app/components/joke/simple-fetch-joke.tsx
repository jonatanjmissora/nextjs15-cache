import { getJoke } from "@/app/data/get-joke"
import { JokeType } from "@/app/lib/types"

async function SimpleFetchJoke() {
	const joke = (await getJoke()) as JokeType

	return (
		<div className="flex flex-col gap-1 w-full">
			<p className="text-xl font-bold underline">Joke</p>
			<p className="font-bold">{joke.setup}</p>
			<p className="font-bold">{joke.punchline}</p>
		</div>
	)
}

export default SimpleFetchJoke
