/* 구조분해 할당 (Destructuring assignment)
구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그값을 변수에 담을 수 있게 하는 표현식 */

let [x, y] = [1, 2];

console.log(x);
console.log(y);

//배열 구조 분해
let users = ["Mike", "Tom", "Jane"];
let [user1, user2, user3] = users; //let user1 = users[0], let user2 = users[1]; , ...

console.log(user1);
console.log(user2);
console.log(user3);

let str = "Mike-Tom-Jane";
let [user4, user5, user6] = str.split("-");

console.log(user4);
console.log(user5);
console.log(user6);

let [a, b, c] = [1, 2]; // c가 undefined기 때문에 기본값 필요
let [d = 3, e = 5, f = 10] = [1, 2];

console.log(d);
console.log(e);
console.log(f);

//일부 반환값 무시
let [userA, userB] = ["Mike", "Tom", "Jane", "Tony"];

console.log(userA);
console.log(userB);

//바꿔치기
let value = 1;
let value2 = 2;
/* let temp = value;
value = value2;
value2 = temp; */
[value, value2] = [value2, value];

console.log(value);
console.log(value2);

//객체 구조분해
let newUser = {
  name: "Mike",
  age: 30,
  gender: "female",
};

let { name, age, gender = "male" } = newUser; //let name = newUser.name; let age = newUser.age/ 순서 상관 안써도 됨 객체라 age,name으로 바꿔도, 기본값 할당해도됨 해당 값 있으면 해당값으로
//새로운 변수 이름 써도됨
let { name: userName, age: userAge } = newUser;

console.log(name);
console.log(age);
console.log(gender);
