// var cnt = 0
//         var cnt2 = 0
//         var tmp = ''
//         var tmp2 = ''
//         var tmp3 = ''
//         for (var i = 0; i < data.length; i++) {
//           // charAt(): 문자값 반환
//           tmp = data.charAt(i)
//           tmp2 = data.charAt(i + 1)
//           tmp3 = data.charAt(i + 2)

//           // charCodeAt(): 유니코드값 반환
//           if (tmp.charCodeAt(0) - tmp2.charCodeAt(0) === 1 && tmp2.charCodeAt(0) - tmp3.charCodeAt(0) === 1) {
//             cnt = cnt + 1
//           }
//           if (tmp.charCodeAt(0) - tmp2.charCodeAt(0) === -1 && tmp2.charCodeAt(0) - tmp3.charCodeAt(0) === -1) {
//             cnt2 = cnt2 + 1
//           }
//         }
//         if (cnt > 0 || cnt2 > 0) {
//           uMessage.showSingleAlertBox('알림', <span class="ti ti-alert-circle error-alert-msg">&nbsp;연속된 문자를 3개 이상 사용하실 수 없습니다.<br></br>(ex: 123, 321, abc, cba 포함 불가)</span>)
//           return false
//         }

const testValidation = (data) => {
  let cnt1 = 0,
    cnt2 = 0,
    cnt3 = 0;
  let temp,
    temp2,
    temp3 = "";

  for (let i in data) {
    temp = data.charAt(+i);
    temp2 = data.charAt(+i + 1);
    temp3 = data.charAt(+i + 2);

    // 정방향 연속성 case abc, bcd, 123, 567 ...
    if (
      temp.charCodeAt(0) - temp2.charCodeAt(0) === -1 &&
      temp2.charCodeAt(0) - temp3.charCodeAt(0) === -1
    ) {
      console.log("temp", temp);
      console.log("temp2", temp2);
      console.log("temp3", temp3);
      cnt1 = cnt1 + 1;
    }
    //
    if (
      temp.charCodeAt(0) - temp2.charCodeAt(0) === 1 &&
      temp2.charCodeAt(0) - temp3.charCodeAt(0) === 1
    ) {
      console.log("temp", temp);
      console.log("temp2", temp2);
      console.log("temp3", temp3);
      cnt2 = cnt2 + 1;
    }
    //반복되는 case
    if (
      temp.charCodeAt(0) - temp2.charCodeAt(0) === 0 &&
      temp2.charCodeAt(0) - temp3.charCodeAt(0) === 0
    ) {
      console.log("temp", temp);
      console.log("temp2", temp2);
      console.log("temp3", temp3);
      cnt3 = cnt3 + 1;
    }
  }
  console.log("cnt1", cnt1);
  console.log("cnt2", cnt2);
  console.log("cnt3", cnt3);
};

testValidation("Eqbr5678@!");
