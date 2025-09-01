"use server"

export const getJsonUser = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log("GET new users")
    const userCollection = await fetch("https://jsonplaceholder.typicode.com/users")
    return await userCollection.json()
}
    