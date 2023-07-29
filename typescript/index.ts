// number
// string
// boolean
// null
// undefined
// any

let a1: number = 3;
// a = "etset";
let b1: string = "abc";
// b = true;
let c2: any = 4;
c2 = "taets";

let d2: number | string = "testss";
d2 = 123;
// d = null;

let e1: string[] = ["apple", "mango"];
// e.push(1);

let f1: number[] = [1, 2];
// f.push("number");

function addNumber(a: number, b: number): number {
  return a + b;
}

// addNumber("t", "e");
console.log(addNumber(4, 5));
