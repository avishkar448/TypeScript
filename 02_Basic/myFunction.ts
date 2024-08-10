function addTwo(num: number) {
    return num + 2
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUser(name: string, email: string, isPaid: boolean) {

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

//It helps to return the number 
function addNumber(num: number): number {
    return num + 2
}

//arrow function
const c = (s: string): string => {
    return ""
}

//
const heros = ["Batman", "Ironman", "Spiderman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

addTwo(5)
getUpper("hitesh")
signUser("Avishkar", "avishkargawali@gmail.com", true)
loginUser("Abhay", "abhaygawali@gmail.com")

export { }