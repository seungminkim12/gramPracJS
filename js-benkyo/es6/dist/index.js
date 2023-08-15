//https://www.youtube.com/watch?v=NcI-WJSWdv8
//object shorthand assignment
let testName = "ksm";
let age = 17;
let person = {
    testName,
    age,
};
console.log(person);
//Destructuring
let person2 = {
    testName2: "ksmm",
    testAge2: 30,
};
let { testName2, testAge2 } = person2;
// let { testName2 } = person2;
console.log(`testName2 ${testName2} testAge2 ${testAge2}`);
let array = [1, 2, 3, 4, 5];
// let [a, b] = array;
// let [a] = array;
let [a, b, ...rest] = array;
console.log(a, b, rest);
//Spread
let person3 = {
    testName2: "ksmm",
    testAge2: 30,
};
// 객체 새로 생성
let person4 = Object.assign({}, person3);
//주소값만 복사
let person5 = person3;
// 속성 추가
let person6 = Object.assign(Object.assign({}, person3), { address: "seoul" });
// 속성 변경
let person7 = Object.assign(Object.assign({}, person3), { testName2: "mm" });
console.log("person4", person4);
console.log("person5", person5);
console.log("person6", person6);
console.log("person7", person7);
console.log(person3 === person4);
console.log(person3 === person5);
let c = [1, 2, 3, 4, 5];
let d = [...c, 3];
let e = [...c, ...d];
console.log(c);
console.log(d);
console.log(e);
//# sourceMappingURL=index.js.map