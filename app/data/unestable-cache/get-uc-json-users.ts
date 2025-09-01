import { unstable_cache } from "next/cache"
import { getJsonUser } from "../get-json-user"

export const getCachedJsonUsers = unstable_cache(async () => {
  console.log("unstable_cache")
  return await getJsonUser()
},
  ["json-users"],
  {
    tags: ["json-users"],
    revalidate: 60,
  }
)