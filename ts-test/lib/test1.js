"use strict";
/*
    js : runtime에 타입결정 / 오류발견
    ts : 컴파일 타입결정 / 오류발견

*/
function add(num1, num2) {
    console.log(num1 + num2);
}
// add()
// add(1);
add(1, 2);
// add(1,2,3);
// add('hello','world');
function showitems(arr) {
    arr.forEach((item) => {
        console.log(item);
    });
}
// function showitems(arr:string[]){
//     arr.forEach((item) => {
//         console.log(item)
//     })
// }
showitems([1, 2, 3]);
// showitems(1,2,3)
