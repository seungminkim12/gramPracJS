// "my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.
// 대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.

function camelize(value){    
    let newArray = value.split('-');
    console.log(newArray)
    newArray = newArray.map((text,idx) => {        
        if(idx !== 0){            
            const upper = text.slice(0,1).toUpperCase();
            console.log(upper)
            return upper + text.slice(1,text.length)            
        }else{
            return text
        }
    })
    console.log('after',newArray)
}

console.log(camelize("background-color") == 'backgroundColor');
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';