import { unstable_cache } from "next/cache"

export const getJsonUsers = unstable_cache(async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  console.log("GET new users")
  const userCollection = await fetch("https://jsonplaceholder.typicode.com/users")
  return await userCollection.json()
},
  ["json-users"],
  {
    tags: ["json-users"],
    revalidate: 20,
  }
)