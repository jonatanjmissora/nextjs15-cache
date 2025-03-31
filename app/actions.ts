"use server"

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function revalidateTagAction() {
  "use server"
    revalidateTag("randomNumber")
    redirect("/")
}