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
        //private _courseCount = 1
        this._courseCount = 1;
        this.city = "pune";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1)
            throw new Error("Course count should be more than 1");
        this._courseCount = courseNum;
    }
}
//It cannot be access the private
// we can access protected
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const avi = new User("avishkargawali8@gmail.com", "avishkar");
avi.city;
