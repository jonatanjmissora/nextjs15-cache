import { getRandomNumber } from "@/app/data/get-random-number"

async function SimpleFetchRandomNumber() {

    const randomNumber = await getRandomNumber()

  return (
    <div className="flex flex-col gap-1 w-full border">
        <span className="text-xl font-bold">Simple Fetch</span>
        <p>{randomNumber}</p>
      </div>
  )
}

export default SimpleFetchRandomNumber