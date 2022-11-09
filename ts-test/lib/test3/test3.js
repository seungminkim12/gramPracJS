"use strict";
//#3 Interface
//error
let user;
user = {
    name: 'sm',
    age: 30
};
let user2 = {
    name: 'sm',
    age: 30
};
console.log(user2.name);
let user3 = {
    name: 'sm',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'F'
};
// let user3 : User2 = {
//     name : 'sm',
//     age : 30,
//     birthYear : 2000,    
//     1:'a',
//     2:'s'
// }
user3.age = 10;
user3.gender = 'man';
// user3.birthYear = 1000
console.log(user3.gender);
console.log(user3[1]);
// const add : Add = function(x,y){
//     return x + y;
// }
const add2 = function (x, y) {
    return x + y;
};
add2(10, 20);
const is = (x) => {
    return x > 19;
};
is(33); //true;
// class macla implements mac {
//     door: 5,
//     stop(){
//         console.log('stop')
//     }
// }
class Bmw {
    constructor() {
        this.color = 'white';
        this.wheels = 4;
    }
    start() {
        console.log('go');
    }
}
class Benz {
    constructor(c) {
        this.wheels = 4;
        this.color = c;
    }
    start() {
        console.log('go');
    }
}
const bz = new Benz('black');
