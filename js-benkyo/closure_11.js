/* 어휘적환경 lexical environment
전역 렉시컬 환경에 둘다 초기화 후 변수는 만나면 undefined로 초기화
함수 실행되면 파라미터를 내부 렉시컬 환경에 할당 하고 이 내부 렉시컬 환경은 전역렉시컬 참ㅁ조 */

let one; //초기화지만 사용불가
one = 1;

function addOne(num) {
  //초기화됐고 사용가능
  console.log(one + num);
}

addOne(5);
