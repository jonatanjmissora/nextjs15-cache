import { unstable_cache } from "next/cache"

const getCached = unstable_cache(async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log("GET New Number")
    return Math.random()
  },
    ["randomNumber"],
    {
      tags: ["randomNumber"],
      revalidate: 3600,
    }
  )

export default async function NumberContainer() {

  const number = await getCached()

    return <p>Number : {number}</p>
}
