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

    //private _courseCount = 1
    protected _courseCount = 1

    readonly city: string = "pune"
    constructor(
        public email: string,
        public name: string,
        //private userId: string 
    ) {

    }

    private deleteToken() {
        console.log("Token deleted")
    }

    get getAppleEmail(): string {
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) throw new Error("Course count should be more than 1")

        this._courseCount = courseNum
    }

}

//It cannot be access the private
// we can access protected
class SubUser extends User{ 
    isFamily: boolean=true
    changeCourseCount(){ 
        this._courseCount=4
    }
}


const avi = new User("avishkargawali8@gmail.com", "avishkar")
avi.city