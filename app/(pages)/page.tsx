import SimpleFetchMongoDb from "../components/mongo-db/simple-fetch-mongodb"
import SimpleFetchRandomNumber from "../components/random-number/simple-fetch-random-number"
import SimpleFetchJoke from "../components/joke/simple-fetch-joke"
import SimpleFetchJsonUsers from "../components/json-users/simple-fetch-json-users"

export default function Home() {
	return (
		<div className="container mx-auto w-5xl 2xl:w-8xl">
			<main className="flex flex-col gap-4">
				<SimpleFetchRandomNumber />

				<SimpleFetchJoke />

				<SimpleFetchMongoDb />

				<SimpleFetchJsonUsers />
			</main>
		</div>
	)
}
