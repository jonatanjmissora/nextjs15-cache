"use server"

import { cloudinary } from "../lib/cloudinary-config"
import { CloudinaryAsset } from "../lib/types"

export const getCloudinary = async (): Promise<{
	success: boolean
	response: CloudinaryAsset[]
	message: string
}> => {
	try {
		const res = await cloudinary.search
			.expression("resource_type:image")
			.sort_by("public_id", "desc")
			.max_results(30)
			.execute()

		await new Promise(resolve => setTimeout(resolve, 3000))

		if (!res) {
			console.error("error en getAssets - !res: ")
			return {
				success: false,
				response: [],
				message: "Problemas con la API de Cloudinary",
			}
		}
		console.log("GET new cloudinary")
		return {
			success: true,
			response: res.resources.slice(0, 10) || [],
			message: "Assets obtenidos correctamente",
		}
	} catch (error: unknown) {
		console.error("error en getAssets - catch: ", error)
		return {
			success: false,
			response: [],
			message:
				error instanceof Error ? error.message : "Error al obtener assets",
		}
	}
}
