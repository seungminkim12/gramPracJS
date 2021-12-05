//call, apply, bind

const mike = {
  name: "Mike",
};

const tom = {
  name: "Tom",
};

function showThisName() {
  //console.log(this.name); // call 안해주면 this - window
}

// console.log(showThisName.call(mike)); //함수를 사용하면서 call을 사용하고 this로 사용할 객체를 넘기면 주어진 객체의 메소드 인것처럼 사용 가능

function update(birth, job) {
  (this.birth = birth), (this.job = job);
}

update.call(mike, 1994, "singer");
update.apply(tom, [1992, "gamer"]); //apply는 call과 비슷하지만 매개변수 배열로
// console.log(mike);
// console.log(tom);

//apply는 배열요소를 함수 매개변수로 사용할 때 유용
const nums = [3, 10, 1, 6, 4];
// const minNum = Math.min(...nums);
//const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null, nums);
const maxNum = Math.max.call(null, ...nums);

// console.log(...nums);
// console.log(minNum);
// console.log(maxNum);

const user = {
  name: "Jane",
  showName: function () {
    console.log(`Hello ${this.name}`);
  },
};

// console.log("user.showName", user.showName());
user.showName();

let fn = user.showName;
fn.call(user);

//bind는 함수의 this값을 영구히 바꿔줌
let boundFn = fn.bind(user);

const user2 = {
  name: "cake",
  showBoundName: boundFn,
};

user2.showBoundName();
