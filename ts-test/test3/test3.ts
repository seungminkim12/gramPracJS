//#3 Interface
//error
let user:object;

user = {
    name : 'sm',
    age : 30
}

// console.log(user.name)

//정상
interface User {
    name:string,
    age:number
}

let user2 : User = {
    name : 'sm',
    age : 30
}

console.log(user2.name)

type Score = 'A' | 'B' | 'C' | 'F'

interface User2 {
    name:string,
    age:number,
    //있어도 되고 없어도됨
    gender?:string,
    readonly birthYear:number,
    //이거보다
    // 1?:string,
    // 2?:string,
    // 3?:string,
    // 4?:string,

    // [grade:number] : string

    [grade:number] : Score
}

let user3 : User2 = {
    name : 'sm',
    age : 30,
    birthYear : 2000,    
    1:'A',
    2:'F'
}

// let user3 : User2 = {
//     name : 'sm',
//     age : 30,
//     birthYear : 2000,    
//     1:'a',
//     2:'s'
// }

user3.age = 10
user3.gender = 'man'
// user3.birthYear = 1000
console.log(user3.gender)
console.log(user3[1])


//function

interface Add{
    // (num1:number, num2:number) : void;
    (num1:number, num2:number) : number;
}

// const add : Add = function(x,y){
//     return x + y;
// }

const add2 : Add = function(x,y){
    return x + y;
}

add2(10,20)
// add2(10,'20')
// add2(10,20,30)

interface IsAdult {
    (age:number):boolean
}

const is : IsAdult = (x) => {
    return x > 19
}

is(33) //true;

//implements
interface Car {
    color:string;
    wheels:number;
    start():void;
}

interface mac extends Car {
    door : number;
    stop() : void;
}
// class macla implements mac {
//     door: 5,
//     stop(){
//         console.log('stop')
//     }
// }

class Bmw implements Car {
    color =  'white';
    wheels =  4;
    start(){
        console.log('go')
    }
}

class Benz implements Car {    
    wheels =  4;
    color;
    constructor(c:string){
        this.color = c
    }

    start(){
        console.log('go')
    }
}

const bz = new Benz('black')

interface Toy{
    name:string;
}

interface ToyCar extends Toy,Car {
    price:number
}