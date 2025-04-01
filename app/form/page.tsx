import Link from "next/link";
import { revalidateTagAction } from "../actions";

export default function page() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <form className="flex flex-col gap-2" action={revalidateTagAction}>
          <h2 className="text-2xl">Form :</h2>
          <button className="border p-3">revalidateTag</button>
        </form>
        <Link className="border p-3" href={"/"}>Volver</Link>
      </div>
    </div>
  )
}
