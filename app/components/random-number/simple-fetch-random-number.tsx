import { getRandomNumber } from "@/app/data/get-random-number"
import { Suspense } from "react"

function SimpleFetchRandomNumber() {
	return (
		<div className="flex flex-col gap-1 w-full">
			<span className="text-xl font-bold underline">Random number</span>
			<Suspense fallback={<p>Loading simple random number...</p>}>
				<SuspendedComponent />
			</Suspense>
		</div>
	)
}

const SuspendedComponent = async () => {
	const randomNumber = await getRandomNumber()
	return (
		<Suspense fallback={<p>Loading simple random number...</p>}>
			<p>{randomNumber}</p>
		</Suspense>
	)
}

export default SimpleFetchRandomNumber
