import Link from "next/link";
import { revalidateTagAction } from "../actions";

export default function page() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <form action={revalidateTagAction}>
          <button>revalidateTag</button>
        </form>
        <Link href={"/"}>Volver</Link>
      </div>
    </div>
  )
}
