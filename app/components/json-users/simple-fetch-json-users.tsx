import { getJsonUser } from "@/app/data/get-json-user"
import { JsonUserType } from "@/app/lib/types"
import { Suspense } from "react"

function SimpleFetchJsonUsers() {
	return (
		<div className="flex flex-col gap-1 w-full">
			<span className="text-xl font-bold underline">Simple Fetch</span>
			<Suspense fallback={<p>Loading simple json...</p>}>
				<SuspendedComponent />
			</Suspense>
		</div>
	)
}

const SuspendedComponent = async () => {
	const users = (await getJsonUser()) as JsonUserType[]
	return (
		<div className="flex flex-wrap gap-2">
			{users.map(user => (
				<span key={user.id} className="font-bold">
					{user.name}
				</span>
			))}
		</div>
	)
}

export default SimpleFetchJsonUsers
