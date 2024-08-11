// | -->   
let score: number | string =33

type UserA={ 
    name:string,
    id: number
}

type Admin ={ 
    username: string,
    id: number
}

let Avishkar: UserA | Admin ={ 
    name:"Avi",
    id: 5621
}

Avishkar={ 
    username:"AG",
    id: 335
}

// function getDbId(id: number | string){ 
//     console.log(`Bd Id is ${id}`)
// }

function getDbId(id: number | string){ 
    if(typeof id === "string"){ 
        id.toLowerCase()
    }
}

getDbId(3)
getDbId("9")

//array 
const data: number []=[1,2,3,4,5]
const data2: string[] | number[] =[1,23,4,5,6,5,5]

let seatAllotment: "aisle" | "middle" | "window"

