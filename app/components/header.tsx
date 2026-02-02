"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
	const pathname = usePathname()

	return (
		<header className="w-full flex justify-center gap-4 p-8">
			<Link
				href="/"
				className={pathname === "/" ? "font-bold border-b-2" : ""}
			>
				Simple Fetch
			</Link>
			<Link
				href="/unstable-cache"
				className={pathname === "/unstable-cache" ? "font-bold border-b-2" : ""}
			>
				Unestable
			</Link>
			<Link href="/swr" className={pathname === "/swr" ? "font-bold border-b-2" : ""}>
				SWR
			</Link>
			<Link
				href="/react-query"
				className={
					pathname === "/react-query" ? "font-bold border-b-2" : ""
				}
			>
				React Query
			</Link>
		</header>
	)
}
