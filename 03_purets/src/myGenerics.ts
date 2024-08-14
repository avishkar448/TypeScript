// allows you to write classes, 
//interfaces, and methods that operate on types specified by the caller at compile-time, rather than a fixed type. 
//This provides a way to create more flexible and reusable code.

const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

//identityThree(true)

function identityFour<T>(val: T): T {
    return val
}

interface Bootle {
    brand: string
    type: number
}

identityFour<Bootle>({ brand: "", type: 23 })

function getSearchProducts<T>(products: T[]): T {
    //database operation
    const myIndex = 3
    return products[9]
}

//arrow function
//<T,> --> To mention that it is generic 
const getMoreSearchProducts = <T,>(products: T[]): T => {
    const myIndex = 3
    return products[myIndex]
}

//
interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valuOne: T, valueTwo: U): object {
    return {
        valuOne,
        valueTwo
    }
}

//anotherFunction(3,"4")
//anotherFunction(3,{})

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    auther: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}