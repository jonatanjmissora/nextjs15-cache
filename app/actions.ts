"use server"

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function revalidateNotesTagAction() {
  revalidateTag("notes")
  redirect("/")
}

export async function revalidateRandomNumberTagAction() {
  revalidateTag("random-number")
  redirect("/random-number")
}

export async function revalidateJsonUsersTagAction() {
  revalidateTag("json-users")
  redirect("/placeholder-users")
}

export async function revalidateAssetsTagAction() {
  revalidateTag("assets")
  redirect("/cloudinary")
}