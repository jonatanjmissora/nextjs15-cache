import Link from "next/link";
import { revalidateJsonUsersTagAction, revalidateNotesTagAction, revalidateRandomNumberTagAction } from "../actions";

export default function page() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center container mx-auto w-8xl">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex items-center gap-12">
          <Link className="border rounded-lg p-3" href={"/"}>&lt;==</Link>
          <span className="text-2xl">Form :</span>
        </div>
        <form className="flex flex-col gap-2" action={revalidateNotesTagAction}>
          <button className="border rounded-lg p-3">revalidate Notes Tag</button>
        </form>
        <form className="flex flex-col gap-2" action={revalidateRandomNumberTagAction}>
          <button className="border rounded-lg p-3">revalidate Random Number Tag</button>
        </form>
        <form className="flex flex-col gap-2" action={revalidateJsonUsersTagAction}>
          <button className="border rounded-lg p-3">revalidate Json Users Tag</button>
        </form>
      </div>
    </div>
  )
}
