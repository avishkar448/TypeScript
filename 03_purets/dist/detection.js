"use strict";
//use typeof
//narrowing
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide id");
        return;
    }
    id.toLowerCase();
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//instanceof-->
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(s) {
    if (s.kind === "circle") {
        return Math.PI * s.radius ** 2;
    }
    // return s.side * s.side
}
function getArea(s) {
    switch (s.kind) {
        case "circle":
            return Math.PI * s.radius ** 2;
        case "square":
            return s.side * s.side;
        case "rectangle":
            return s.length * s.width;
        default:
            const _defaultForShape = s;
            return _defaultForShape;
    }
}
