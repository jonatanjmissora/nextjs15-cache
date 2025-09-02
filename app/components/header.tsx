"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
	const pathname = usePathname()

	return (
		<header className="w-full flex justify-center gap-4 p-8">
			<Link
				href="/random-number"
				className={pathname === "/random-number" ? "font-bold border-b-2" : ""}
			>
				Random Number
			</Link>
			<Link
				href="/joke"
				className={pathname === "/joke" ? "font-bold border-b-2" : ""}
			>
				Joke
			</Link>
			<Link href="/" className={pathname === "/" ? "font-bold border-b-2" : ""}>
				Mongo DB
			</Link>
			<Link
				href="/placeholder-users"
				className={
					pathname === "/placeholder-users" ? "font-bold border-b-2" : ""
				}
			>
				Placeholder Users
			</Link>
			<Link
				href="/cloudinary"
				className={pathname === "/cloudinary" ? "font-bold border-b-2" : ""}
			>
				Cloudinary
			</Link>
		</header>
	)
}
