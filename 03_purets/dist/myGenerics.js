"use strict";
// allows you to write classes, 
//interfaces, and methods that operate on types specified by the caller at compile-time, rather than a fixed type. 
//This provides a way to create more flexible and reusable code.
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
//identityThree(true)
function identityFour(val) {
    return val;
}
identityFour({ brand: "", type: 23 });
function getSearchProducts(products) {
    //database operation
    const myIndex = 3;
    return products[9];
}
//arrow function
//<T,> --> To mention that it is generic 
const getMoreSearchProducts = (products) => {
    const myIndex = 3;
    return products[myIndex];
};
function anotherFunction(valuOne, valueTwo) {
    return {
        valuOne,
        valueTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
