//use typeof
//narrowing
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase()
  }
  return val + 3
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide id")
    return
  }
  id.toLowerCase()
}

//in --> 
interface User {
  name: string,
  email: string,
}

interface Admin {
  name: string,
  email: string,
  isAdmin: boolean
}

function isAdmin(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin
  }

}

//instanceof-->
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  }
  else {
    console.log(x.toUpperCase())
  }
}

type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet
    return "Fish food"
  }
  else {
    pet
    return "bird food"
  }
}

interface Circle {
  kind: "circle",
  radius: number
}

interface Square {
  kind: "square",
  side: number
}

interface Rectangle {
  kind: "rectangle",
  length: number,
  width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(s: Shape) {
  if (s.kind === "circle") {
    return Math.PI * s.radius ** 2
  }
  // return s.side * s.side
}

function getArea(s: Shape) {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2

    case "square":
      return s.side * s.side

    case "rectangle":
      return s.length * s.width

    default:
      const _defaultForShape: never = s
      return _defaultForShape
  }
}