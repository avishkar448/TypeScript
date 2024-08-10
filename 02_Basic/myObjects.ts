const user = {
    name: "Avishkar",
    email: "avishkargawali8@gmail.com",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }
createUser({ name: "Avishkar", isPaid: false })

//function xx(){}:{return Object} --> It return Object 
function createCourse(): { name: string, price: number } {
    return { name: "react", price: 2000 }
}

//pass the object 
function x({ name: string, isPaid: boolean }) { }

let userX = {
    name: "Avishkar",
    isPaid: true,
    email: "avishkargawali8@gmail.com",
}

x(userX) //we able to pass email --> extra info


export { }