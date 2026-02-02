import SwrRandomNumber from "@/app/components/random-number/swr-random-number"
import SwrJoke from "@/app/components/joke/swr-joke"
import SwrMongoDb from "@/app/components/mongo-db/swr-mongodb"
import SwrJsonUsers from "@/app/components/json-users/swr-json-users"

export default function page() {
	return (
		<div className="container mx-auto w-5xl 2xl:w-8xl">
			<main className="flex flex-col gap-4">
				<SwrRandomNumber />

				<SwrJoke />

				<SwrMongoDb />

				<SwrJsonUsers />
			</main>
		</div>
	)
}
