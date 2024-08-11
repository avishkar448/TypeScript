interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //startTrail: () => string  --> 1st method
    startTrail(): string,
    getCoupon(c_name: string) : number
}

interface User{ 
    githubToken: string,
}

interface Admin1 extends User{ 
    role: "admin" | "ts" | "learner"
} 

const avishkar: Admin1 = {
    role:"admin",
    dbId: 1,
    githubToken:"avishkar448",
    email: "XYZ",
    userId: 123,
    startTrail: () => {
        return "Hello!!"
    },
    getCoupon:(name: "www")=>{ 
        return 10
    }
}

