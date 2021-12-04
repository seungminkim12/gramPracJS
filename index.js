function isAdult(user) {
  if (!("age" in user) || user.age < 20) {
    console.log(`!('age' in user) ${!("age" in user)}`);
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
