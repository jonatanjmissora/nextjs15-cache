"use client"

import { getJsonUser } from "@/app/data/get-json-user"
import { JsonUserType } from "@/app/lib/types"
import useSWR, { mutate } from "swr"
import { LoaderSpinner } from "../loader-spinner"

export default function SwrJsonUsers() {
	const { data, error, isValidating } = useSWR(
		"swr-json-users",
		getJsonUser as () => Promise<JsonUserType[]>
	)

	return (
		<div className="flex flex-col gap-1 w-full border">
			<div className="text-xl font-bold flex justify-between items-center gap-1">
				SWR
				{isValidating && <LoaderSpinner />}
				<button
					className="border rounded-lg p-3"
					onClick={() => mutate("swr-json-users")}
				>
					revalidate
				</button>
			</div>
			{/* si haces fallback en SWRConfig, no pongas el loading */}
			{/* {isLoading && <p>Loading SWR Json users</p>} */}
			{error && <p>Error: {error.message}</p>}
			{data?.map(user => (
				<span key={user.id} className="font-bold">
					name: {user.name}
				</span>
			))}
		</div>
	)
}
