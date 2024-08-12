abstract class TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getAvi(): void
    grtReelTime(): number {
        //some complex calculation
        return 8
    }
}

class Facebook extends TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getAvi(): void {
        console.log("Avishkar")
    }
}

//we cannot create a object
const x=new Facebook("test","test",3)
x.grtReelTime()