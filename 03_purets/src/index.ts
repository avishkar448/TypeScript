// class User{ 
//     public email: string
//     private name:string
//     // #name:string
//     readonly city: string ="pune"
//     constructor(email:string,name:string){ 
//         this.email=email,
//         this.name=name
//     }
// }

class User {
    readonly city: string = "pune"
    constructor(
        public email: string,
        public name: string,
        //private userId: string 
    ) {
        
    }
}


const avi = new User("avishkargawali8@gmail.com", "avishkar")
avi.city