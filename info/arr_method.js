// "my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.
// 대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.

function camelize(value){    
    let newArray = value.split('-');    
    newArray = newArray.map((text,idx) => {        
        if(idx !== 0){            
            const upper = text.slice(0,1).toUpperCase();            
            return upper + text.slice(1,text.length)            
        }else{
            return text
        }
    })
    newArray = newArray.join('')    
    return newArray;
}

// console.log(camelize("background-color") == 'backgroundColor');
// console.log(camelize("list-style-image") == 'listStyleImage');
// console.log(camelize("-webkit-transition") == 'WebkitTransition');

//clean 

function c_camelize(value){
    return value
    .split('-')
    .map((val,idx) => idx === 0 ? val : val[0].toUpperCase() + val.slice(1))
    .join('')    
}

// console.log(c_camelize("background-color") == 'backgroundColor');
// console.log(c_camelize("list-style-image") == 'listStyleImage');
// console.log(c_camelize("-webkit-transition") == 'WebkitTransition');


// 배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.
// 새로 작성하는 함수는 기존 배열 arr을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다.

let arr = [5, 3, 8, 1];

function filterRange(val,min,max){    
    return val.filter((value) => value >= 1 && value <= 4)
}

let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (조건에 맞는 요소)

// console.log( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)



// 배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요. 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b
// 작성한 함수는 기존 배열을 변경하기만 하고 아무것도 반환하지 않아야 합니다.

let arr2 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // 범위 밖의 요소를 제거함
      if (val < a || val > b) {
        arr.splice(i, 1);
        // i--;
      }
    }  
  }
  

filterRangeInPlace(arr2, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

console.log( arr2 ); // [3, 1]



let arr3 = [5, 2, 1, -10, 8];

// 요소를 내림차순으로 정렬해주는 코드를 여기에 작성해보세요.
arr3 = arr3.sort((a,b)=> b - a)

console.log(arr3); // 8, 5, 2, 1, -10

function Calculator(){
    let cal = {
        '+':(a,b)=> a+b,
        '-':(a,b)=> a-b,        
    }
    this.calculate = function(str){
        let arr = str.split(' ')
        console.log(arr)
        for(let key in cal){            
            if(key === arr[1]){                
                return cal[key](parseInt(arr[0]),parseInt(arr[2])) 
            }
        }        
    }
    this.addMethod = (str,func) => {
        cal[str] = func
    }    
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8


// name을 나타내는 프로퍼티를 가진 객체 user가 담긴 배열이 있습니다. name의 값만 담은 새로운 배열을 만들어주는 코드를 작성해보세요.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map((item) => item.name)

console.log( names ); // John, Pete, Mary

// 세 개의 프로퍼티 name과 surname, id를 가진 객체 user가 담긴 배열이 있습니다.
// name과 surname을 조합해 fullName을 만들고, 이를 이용해 두 개의 프로퍼티 id와 fullName을 가진 객체를 담은 새로운 배열을 반환해주는 코드를 작성해보세요.

let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john2, pete2, mary2 ];

let usersMapped = users2.map((item) => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id
}));


/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith