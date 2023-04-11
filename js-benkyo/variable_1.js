/*
var는 한번 선언된 변수를 다시 가능, 선언 전 사용가능(선언만 호이스팅, 할당은 X)
let은 한번만 선언 가능 (호이스팅 가능이긴한데 TDZ(Temporal Dead Zone 발생))
호이스팅  : scope 단위 
선언단계 초기화 단계 할당단계 
var => 선인 + 초기화 , 할당단계
let => 선언(호이스팅), 초기화(코드 도달할때), 할당 따로
const => 선언 + 초기화 + 할당

var : 함수 스코프(함수내에서만 지역변수)
const, let : 블록스코프 (for, if, function 등...)
*/

// console.log(name) TDZ
const name = "mike"; //함수 선언 및 할당
console.log(name); //사용가능

let age = 30;
function showAge() {
  console.log(age);
  
  // let age = 20; //reference Error
}
showAge();
