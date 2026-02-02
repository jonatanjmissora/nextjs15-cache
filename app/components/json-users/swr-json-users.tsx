"use client"

import useGetSwrJsonUsers from "@/app/data/swr/use-get-swr-json-users"
import { LoaderSpinner } from "../loader-spinner"

export default function SwrJsonUsers() {
	const { data, error, isValidating, mutate } = useGetSwrJsonUsers()

	return (
		<div className="flex flex-col gap-1 w-full">
			<div className="text-xl font-bold flex justify-between items-center gap-1">
				<span className="font-bold underline">JSON Users</span>
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
			<div className="flex flex-wrap gap-2">
			{data?.map(user => (
				<span key={user.id} className="font-bold">
					{user.name}
				</span>
			))}
			</div>
		</div>
	)
}
