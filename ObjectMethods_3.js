//computed Property

const user = {
  [1 + 4]: 5,
  ["안녕" + "하세요"]: "Hello",
};

console.log(user);

//methods
//Object.assign() 객체 복제
const user1 = {
  name: "Mike",
  age: 30,
};

//const cloneUser = user; user 변수에는 객체값이 아닌 객체 참조 메모리 주소값이 들어가 있기 때문에 주소값이 복제됨
//clonUser.name = 'Tom' 으로 바꾸면 user의 name도 바뀜

const newUser = Object.assign({}, user1);
const maledUser = Object.assign({ male: "man" }, user1);

newUser.name = "Tom";

console.log(`user1.name ${user1.name}`);
console.log(`newUser.name ${newUser.name}`);
console.log(`maledUser ${maledUser}`);

//Object.keys() 키배열 반환
const keys = Object.keys(maledUser);
console.log(`keys ${keys}`);
console.log(keys);

//Object.values() 값 배열 반환
const values = Object.values(maledUser);
console.log(`valuses type ${typeof values}`);
console.log(values);

//Object.entries() 키,값 배열 반환
const entries = Object.entries(maledUser);
console.log(entries);

//Object.fromEntries() 키,값 배열을 객체로
const madeUser = Object.fromEntries(entries);
console.log(madeUser);

function makedObj(key, val) {
  return {
    [key]: val,
  };
}

const obj = makedObj("age", 22);
console.log(obj);
