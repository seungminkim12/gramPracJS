/**
 * 재귀함수
 * https://ko.javascript.info/recursion 
 */



/**
 * 숫자 1 + 2 + ... + n을 계산하는 함수 sumTo (n)을 만들어보세요.
 */
function sumTo(n){ 
    if(n === 1) return 1;       
    return n + sumTo(n-1);
}

// console.log(sumTo(100))

/**
 * 재귀를 사용하여 n!을 계산하는 함수, factorial(n)을 만들어보세요.
 */

//my code
function factorial(n){
    if(n === 1) return 1;
    return n * factorial(n-1)
}

//clean code
function factorialClean(n){
    return n > 1 ? n * factorialClean(n-1): 1;
}

// console.log(factorial(5))
// console.log(factorialClean(5))

/**
 * n 번째 피보나치 수를 반환하는 함수 fib(n)을 작성해보세요.
 */

function fib(n){    
    if(n < 2 ) return 1;
    return fib(n-1) + fib(n-2)
}

function fibClean(n){
    let a = 1;
    let b = 1;
    for (let i = 3; i<= n; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

/**
 * linkedList
 * 리스트 내 항목을 차례대로 하나씩 출력해주는 함수 printList(list)를 만들어보세요.
 */

 let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };


// 재귀 (코드가 간결해짐)
function printList(list){
    console.log(list.value)
    if(list.next) {
        printList(list.next)
    }            
}

//반복문 (리소스를 덜씀 )
function printListLoop(list) {
    let temp = list;
    while(temp){
        console.log(temp.value);
        temp = temp.next;
    }
}

// printList(list)
// printListLoop(list)

/**
 * 위 문제(단일 연결 리스트 출력하기)에 있는 단일 연결 리스트의 항목을 역순으로 출력해주는 함수를 만들어봅시다.
 */

//재귀
function reversePrintList(list){
    if(list.next){
        reversePrintList(list.next)
    }
    console.log(list.value)
}

//반복문 만으로는 구현 힘들어 배열 선언해야함
function reverseLoopList(list){
    let temp = list;
    let arr = []
    while(temp){                
        arr.push(temp.value);
        temp = temp.next;        
    }
    for (let i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}

// reversePrintList(list);
reverseLoopList(list)