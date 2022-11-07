let car:string = 'bmw';

// car = 1;

let age:number = 123;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3]

let week1:string[] = ['m','t','w']
let week2:Array<string> = ['m','t','w']

// week1.push(1)

//튜플
let b:[string,number];
b = ['z',1]
// b = [1,'z']

b[0].toLowerCase()
// b[1].toLowerCase()

//void, never 
function sayHello():void{
    console.log('hello')
}

//never
function showerror():never{
    throw new Error()
}

function inloop():never{
    while(true){

    }
}

//enum
//컴파일 결과 보면 양방향 매핑 , 단방향 매핑
//특정 값 강제, 값들이 연관이 있을때
enum Os {
    Window =3,
    ios = 10,
    Android
}

enum Os2 {
    Window = 'win',
    ios = 'ios',
    Android = 'and'
}

let myOs:Os2
myOs = Os2.Window

//null, undefined
let nu:null = null;
let un:undefined = undefined;