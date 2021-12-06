//Symbol 유일성 보장 (전체코드 중 하나)
const obj = {
  1: "1입니다.",
  false: "거짓",
};

// console.log(Object.keys(obj));

const a = Symbol();
const b = Symbol();

// console.log(a === b); //false
// console.log(a == b);  //false

//설명 붙여주기 가능
const id = Symbol("id");
const id1 = Symbol("id");

// console.log(id);
// console.log(id1);

//특정 객체의 원본데이터 건드리지 않고 속성 추가 가능
const user = {
  name: "Mike",
  age: 30,
  [id]: "myid", //computed property key
};

//Symbol 안보임 for in 루프 등 에서
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user[id]);

//하나의 심볼만 보장 받고 없으면 만들고 있으면 가져옴, Symbol함수는 매번 다른 값을 생성하지만 for메서드 쓰면 키값으로 공유 가능(전역심볼)
const id2 = Symbol.for("id1");
const id3 = Symbol.for("id1");

console.log(id2 === id3); //true
console.log(Symbol.keyFor(id2)); //'id1'
//전역Symbol이 아니면 keyFor 사용 불가

console.log(id.description); //id

//숨겨진Symbol보는법
console.log(Object.getOwnPropertySymbols(user));
Reflect.ownKeys(user);

//다른 개발자가 만들어 놓은 객체
const admin = {
  name: "Jane",
  age: 20,
};

//내가 작업
//admin.showName = function () {};
const showName = Symbol("show name");
admin[showName] = function () {
  console.log(this.name);
};

// 사용자가 접속하면 보는 메시지
for (let key in admin) {
  console.log(`his ${key} is ${admin[key]}`);
}

admin[showName]();
