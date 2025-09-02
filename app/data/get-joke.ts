"use server"

export const getJoke = async () => {
	await new Promise(resolve => setTimeout(resolve, 3000))
	console.log("GET new users")
	const res = await fetch(
		"http://www.official-joke-api.appspot.com/random_joke"
	)
	return await res.json()
}
