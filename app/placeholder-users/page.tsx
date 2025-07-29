import Link from "next/link";
import { Suspense } from "react";
import { getJsonUsers } from "../data/get-json-users";
import { JsonUserType } from "../lib/types";

export default function PlaceholderUsersPage() {
  return (
    <div className="container mx-auto w-8xl">
      <main className="flex flex-col items-start gap-6">
      <div className="flex items-center gap-10">
          <span className="text-3xl font-bold">Placeholder Users</span>
          <span>"JasonPlaceholder users, {"<"}Suspense{">"} y un getJsonUsers() con un unstable_cache"</span>
        </div>
        <Link className="border rounded-lg p-3" href={"/form"}>Mutation</Link>
        <Suspense fallback={<p>Loading...</p>}>
          <JsonUsersList />
        </Suspense>
      </main>
    </div>
  )
}

export async function JsonUsersList() {
  
    const users = await getJsonUsers() as JsonUserType[]
  
    return (
      <div className="flex flex-col w-full">
        {users.map((user) => (
          <div key={user.id} className="text-lg p-2 flex justify-between gap-2 w-full">
            <span className="font-bold">name:</span> {user.name}
            <span className="font-bold">email:</span> {user.email}
            <span className="font-bold">phone:</span> {user.phone}
            <span className="font-bold">id:</span> {user.id}
          </div>
        ))}
      </div>
    )
  }
