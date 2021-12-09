function isAdult(user) {
  //age가 없으면 둘다 false
  if (!("age" in user) || user.age < 20) {
    console.log(`!('age' in user) ${!("age" in user)}`);
    console.log(user.age < 20);
    return false;
  }
  return true;
}

const Mike = {
  name: "mike",
  age: 30,
};

const Jane = {
  name: "jane",
};

console.log(isAdult(Jane));
