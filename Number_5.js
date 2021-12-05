//10 ->< 2/16진수

let num = 10;
let num2 = 255;

console.log(num.toString());
console.log(num.toString(2));
console.log(num2.toString(16));

let num3 = 5.1;
let num4 = 5.7;

console.log(Math.ceil(num3));
console.log(Math.ceil(num4));
console.log(Math.floor(num3));
console.log(Math.floor(num4));
console.log(Math.round(num3));
console.log(Math.round(num4));

let userRate = 30.1234;

console.log(Number(userRate.toFixed(2)));
console.log(userRate.toFixed(0));
console.log(userRate.toFixed(6));

let x = Number("x");

console.log(isNaN(x));
console.log(isNaN(3));

let margin = "10px";

console.log(parseInt(margin));
console.log(Number(margin));

let redColor = "f3";

console.log(parseInt(redColor));
console.log(parseInt(redColor, 16));
console.log(parseInt("11", 2));

let padding = "18.5%";

console.log(parseInt(padding));
console.log(parseFloat(padding));

//1~100사이의 숫자
console.log(Math.floor(Math.random() * 100) + 1);

//최대,최소값
console.log(Math.max(1, 2, 3, 4, 5, 6, 7));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7));

//절대값
console.log(Math.abs(-1));

//제곱
console.log(Math.pow(2, 10));

//제곱근
console.log(Math.sqrt(16));
