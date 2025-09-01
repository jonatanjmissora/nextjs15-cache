"use server"

export const getRandomNumber = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log("GET new random number")
    return Math.random().toFixed(2)
}