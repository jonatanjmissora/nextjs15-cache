"use client"

import { SWRConfig } from "swr"

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<SWRConfig
			value={{
				refreshInterval: 15000,
				revalidateOnMount: false,
				revalidateOnFocus: false,
			}}
		>
			{children}
		</SWRConfig>
	)
}
