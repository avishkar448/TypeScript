"use strict";
class TakePhotos {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    grtReelTime() {
        //some complex calculation
        return 8;
    }
}
class Facebook extends TakePhotos {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getAvi() {
        console.log("Avishkar");
    }
}
//we cannot create a object
const x = new Facebook("test", "test", 3);
x.grtReelTime();
