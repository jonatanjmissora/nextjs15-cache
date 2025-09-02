import { getCachedJoke } from "@/app/data/unestable-cache/get-uc-joke"
import { JokeType } from "@/app/lib/types"

async function UnestableCachedJoke() {
	const joke = (await getCachedJoke()) as JokeType

	return (
		<div className="flex flex-col gap-1 w-full border">
			<span className="text-xl font-bold">Unestable Cache</span>
			<p className="font-bold">{joke.setup}</p>
			<p className="font-bold">{joke.punchline}</p>
		</div>
	)
}

export default UnestableCachedJoke
