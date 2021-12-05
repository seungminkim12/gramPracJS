//객체의 메소드가 property에 있으면 끝, 없으면 prototype에서 찾음
//prototype chain
const car = {
  wheels: 4,
  drive() {
    console.log("driving..");
  },
};

const bmw = {
  color: "red",
  navigation: 1,
};

bmw.__proto__ = car;

const x5 = {
  color: "white",
  name: "x5",
};

x5.__proto__ = bmw;

console.log(`x5 color ${x5.color}`);
console.log(`x5 drive ${x5.drive()}`);
console.log(`bmw wheels ${bmw.wheels}`);

for (x in x5) {
  //console.log(x);
  if (x5.hasOwnProperty(x)) {
    console.log(`o ${x}`);
  } else {
    console.log(`x ${x}`);
  }
}

//간단하게 쓰기
// const car2 = {
//   wheels: 4,
//   drive() {
//     console.log("driving ..");
//   },
// };

const Benz = function (color) {
  this.color = color;
};

/* Benz.prototype.wheels = 4;
Benz.prototype.drive = function () {
  console.log("driving ...");
};
Benz.prototype.navigation = 1;
Benz.prototype.stop = function () {
  console.log("Stop");
}; */

//이렇게 하면 constructor가 undefined가 됨
Benz.prototype = {
  //그러므로 수동 정의해야됨
  constructor: Benz,
  wheels: 4,
  drive() {
    console.log("driving ...");
  },
  navigation: 1,
  stop() {
    console.log("Stop");
  },
};

const eClass = new Benz("white");
const cClass = new Benz("green");

// eClass.__proto__ = car2;
// cClass.__proto__ = car2;

console.log(`eclass ${eClass.drive()}`);
console.log(`cClacss ${cClass.color}`);
console.log(`eclass Stop ${eClass.stop()}`);

//생성자 함수가 새로운 함수를 만들떄 그 객체는 생성자의 instace
console.log(eClass instanceof Benz);
console.log(cClass.constructor === Benz);

//아무나 요소 변경 못하게 하려면 클로저 함수 쓰면됨
const Kia = function (color) {
  //this.color = color,
  const c = color;
  this.getColor = function () {
    console.log(c);
  };
};

const k5 = new Kia("white");
