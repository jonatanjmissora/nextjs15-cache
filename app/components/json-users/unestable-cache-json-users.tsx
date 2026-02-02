import { getCachedJsonUsers } from "@/app/data/unestable-cache/get-uc-json-users"
import { JsonUserType } from "@/app/lib/types"

async function UnestableCachedJsonUsers() {

    const users = await getCachedJsonUsers() as JsonUserType[]

  return (
    <div className="flex flex-col gap-1 w-full">
        <span className="text-xl font-bold underline">Unestable Cache</span>
        <div className="flex flex-wrap gap-2">
            {users.map((user) => (
                <span key={user.id} className="font-bold">{user.name}</span> 
            ))}
        </div>
      </div>
  )
}

export default UnestableCachedJsonUsers