type User={ 
    name:string,
    email:string,
    isActive:boolean
}

function createUsers(user:User):User{ 
    return {name:"",email:"",isActive:true}
}

createUsers({name:"",email:"",isActive:true})


//readonly -> we dont want to change that
type xUser={ 
   readonly _id:string,
    name:string,
    email:string,
    isActive:boolean,
    creditDetails?: number
}

let myUser: xUser={ 
    _id:"1236",
    name:"avi",
    email:"avishkargawali8@",
    isActive:false
}

myUser.email="xyz12@gmail.com"
//myUser._id="545465" --> cannot change

type cardNumber={ 
    cardNumber: string
}

type cardDate ={ 
    cardDate: string
}

//by using & we combine the two or more object 
type cardDetails = cardNumber & cardDate & { 
    cvv:number
}