//생성자함수 : 객체 여러개 만들어야할때 사용(회원, 상품 등..)

//보통 대문자 (실제 코드에는 없음 new 사용하는순간)
function User(name, age) {
  // this = {}

  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name); //this : user1,2,3,4, ...
  };

  // return this;
}

//new 호출 하는 순간 return 됨
let user1 = new User("Mike", 30);
let user2 = User("Jane", 22); //undefined
let user3 = new User("Tom", 17);
let user4 = new User("Han", 40);

user4.sayName();
