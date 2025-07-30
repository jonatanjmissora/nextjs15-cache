import Link from "next/link";
import { Suspense } from "react";
import { getJsonUsers } from "../../data/get-json-users";
import { JsonUserType } from "../../lib/types";

export default function PlaceholderUsersPage() {
  return (
    <div className="container mx-auto w-5xl 2xl:w-8xl">
      <main className="flex flex-col items-center gap-6">
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
          <div key={user.id} className="2xl:text-lg text-xs p-2 flex justify-between gap-2 w-full">
            <span className="font-bold">name: {user.name}</span> 
            <span className="font-bold">email: {user.email}</span>
            <span className="font-bold">phone: {user.phone}</span>
            <span className="font-bold">id: {user.id}</span>
          </div>
        ))}
      </div>
    )
  }
