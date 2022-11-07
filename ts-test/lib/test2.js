"use strict";
let car = 'bmw';
// car = 1;
let age = 123;
let isAdult = true;
let a = [1, 2, 3];
let a2 = [1, 2, 3];
let week1 = ['m', 't', 'w'];
let week2 = ['m', 't', 'w'];
// week1.push(1)
//튜플
let b;
b = ['z', 1];
// b = [1,'z']
b[0].toLowerCase();
// b[1].toLowerCase()
//void, never 
function sayHello() {
    console.log('hello');
}
//never
function showerror() {
    throw new Error();
}
function inloop() {
    while (true) {
    }
}
//enum
//컴파일 결과 보면 양방향 매핑 , 단방향 매핑
//특정 값 강제, 값들이 연관이 있을때
var Os;
(function (Os) {
    Os[Os["Window"] = 3] = "Window";
    Os[Os["ios"] = 10] = "ios";
    Os[Os["Android"] = 11] = "Android";
})(Os || (Os = {}));
var Os2;
(function (Os2) {
    Os2["Window"] = "win";
    Os2["ios"] = "ios";
    Os2["Android"] = "and";
})(Os2 || (Os2 = {}));
let myOs;
myOs = Os2.Window;
//null, undefined
let nu = null;
let un = undefined;
