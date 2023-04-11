//10 ->< 2/16진수

let num = 10;
let num2 = 255;

console.log(num.toString()); //10
console.log(num.toString(2)); //1010
console.log(num2.toString(16)); //ff

let num3 = 5.1;
let num4 = 5.7;

console.log(Math.ceil(num3)); //6
console.log(Math.ceil(num4)); //6
console.log(Math.floor(num3)); //5
console.log(Math.floor(num4)); //5
console.log(Math.round(num3)); //5
console.log(Math.round(num4)); //6

let userRate = 30.1234;

console.log(Number(userRate.toFixed(2))); //30.12
console.log(userRate.toFixed(0)); //30
console.log(userRate.toFixed(6)); //30.123400

let x = Number("x");

console.log(isNaN(x)); //true
console.log(isNaN(3)); //false

let margin = "10px";

console.log(parseInt(margin)); //10
console.log(Number(margin)); //NaN

let redColor = "f3";

console.log(parseInt(redColor)); //NaN
console.log(parseInt(redColor, 16)); //243
console.log(parseInt("11", 2)); //3

let padding = "18.5%";

console.log(parseInt(padding)); //18
console.log(parseFloat(padding)); //18.5

//1~100사이의 숫자
console.log(Math.floor(Math.random() * 100) + 1);

//최대,최소값
console.log(Math.max(1, 2, 3, 4, 5, 6, 7)); //7
console.log(Math.min(1, 2, 3, 4, 5, 6, 7)); //1

//절대값
console.log(Math.abs(-1)); //1

//제곱
console.log(Math.pow(2, 10)); //1024

//제곱근
console.log(Math.sqrt(16)); //4
