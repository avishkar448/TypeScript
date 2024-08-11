"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "pune";
    }
}
const avi = new User("avishkargawali8@gmail.com", "avishkar");
avi.city;
