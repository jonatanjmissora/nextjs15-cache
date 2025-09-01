"use client"

import { getJsonUser } from "@/app/data/get-json-user"
import { JsonUserType } from "@/app/lib/types"
import useSWR from "swr"
import { LoaderSpinner } from "../loader-spinner"

export default function SwrJsonUsers() {
	const { data, error, isLoading, isValidating } = useSWR(
		"swr-json-users",
		getJsonUser as () => Promise<JsonUserType[]>
	)

	return (
		<div className="flex flex-col gap-1 w-full border">
			<div className="text-xl font-bold flex items-center gap-1">
				SWR
				{isValidating && <LoaderSpinner />}
			</div>
			{isLoading && <p>Loading SWR Json users</p>}
			{error && <p>Error: {error.message}</p>}
			{data?.map(user => (
				<span key={user.id} className="font-bold">
					name: {user.name}
				</span>
			))}
		</div>
	)
}
