import { getJsonUser } from "@/app/data/get-json-user"
import { JsonUserType } from "@/app/lib/types"

async function SimpleFetchJsonUsers() {

    const users = await getJsonUser() as JsonUserType[]

  return (
    <div className="flex flex-col gap-1 w-full border">
        <span className="text-xl font-bold">Simple Fetch</span>
        {users.map((user) => (
            <span key={user.id} className="font-bold">{user.name}</span> 
        ))}
      </div>
  )
}

export default SimpleFetchJsonUsers