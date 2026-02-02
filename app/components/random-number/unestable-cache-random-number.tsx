import { getCachedRandomNumber } from "@/app/data/unestable-cache/get-uc-random-number"

export async function UnestableCachedRandomNumber() {

    const rndNumber = await getCachedRandomNumber()

    return <div className="w-full"><span className="text-xl font-bold underline">Random Number:</span><p className="font-bold">{rndNumber}</p></div>
}