"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

function TanStackQueryProvider({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						// staleTime: 15 * 1000,
						refetchInterval: 15 * 1000,
						refetchIntervalInBackground: true,
						refetchOnWindowFocus: false,
						refetchOnMount: false,
					},
				},
			})
	)

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default TanStackQueryProvider
