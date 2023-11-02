// const testValidation = (data) => {
//   let cnt1 = 0, cnt3 = 0;

//   const checkAsciiBetweenWord = (first, second, third) => {
//     const diff1 = first.charCodeAt(0) - second.charCodeAt(0);
//     const diff2 = second.charCodeAt(0) - third.charCodeAt(0);

//     // Check for ascending consecutive characters
//     if (diff1 === -1 && diff2 === -1) {
//       console.log("Ascending consecutive characters:");
//       console.log("Char 1:", first);
//       console.log("Char 2:", second);
//       console.log("Char 3:", third);
//       cnt1++;
//     }

//     // Check for repeated characters
//     if (diff1 === 0 && diff2 === 0) {
//       console.log("Repeated characters:");
//       console.log("Char 1:", first);
//       console.log("Char 2:", second);
//       console.log("Char 3:", third);
//       cnt3++;
//     }

//     return [diff1, diff2];
//   };

//   for (let i = 0; i < data.length - 2; i++) {
//     const [diff1, diff2] = checkAsciiBetweenWord(
//       data.charAt(i),
//       data.charAt(i + 1),
//       data.charAt(i + 2)
//     );
//   }

//   console.log("cnt1", cnt1);
//   console.log("cnt3", cnt3);
// };

// const testValidation = (data) => {
//   let cnt1 = 0,
//     // cnt2 = 0,
//     cnt3 = 0;

//   const checkAsciiBetweenWord = (first, second) => {
//     return first.charCodeAt(0) - second.charCodeAt(0);
//   };

//   for (let i in data) {
//     const firstChar = data.charAt(+i);
//     const secondChar = data.charAt(+i + 1);
//     const thirdChar = data.charAt(+i + 2);

//     // 정방향 연속성 case abc, bcd, 123, 567 ...
//     if (
//       checkAsciiBetweenWord(firstChar, secondChar) === -1 &&
//       checkAsciiBetweenWord(secondChar, thirdChar) === -1
//     ) {
//       console.log("temp", firstChar);
//       console.log("temp2", temp2);
//       console.log("temp3", temp3);
//       cnt1++;
//     }
//     //
//     // if (
//     //   checkAsciiBetweenWord(temp, temp2) === 1 &&
//     //   checkAsciiBetweenWord(temp2, temp3) === 1
//     // ) {
//     //   console.log("temp", temp);
//     //   console.log("temp2", temp2);
//     //   console.log("temp3", temp3);
//     //   cnt2 = cnt2 + 1;
//     // }
//     //반복되는 case
//     if (
//       checkAsciiBetweenWord(firstChar, secondChar) === 0 &&
//       checkAsciiBetweenWord(secondChar, thirdChar) === 0
//     ) {
//       console.log("temp", firstChar);
//       console.log("temp2", secondChar);
//       console.log("temp3", thirdChar);
//       cnt3++;
//     }
//   }
//   console.log("cnt1", cnt1);
//   // console.log("cnt2", cnt2);
//   console.log("cnt3", cnt3);
// };

// const testValidation = (data) => {
//   let cnt1 = 0,
//     cnt2 = 0,
//     cnt3 = 0;

//   const checkAsciiBetweenWord = (first, second) => {
//     return first.charCodeAt(0) - second.charCodeAt(0);
//   };

//   for (let i in data) {
//     const temp = data.charAt(+i);
//     const temp2 = data.charAt(+i + 1);
//     const temp3 = data.charAt(+i + 2);

//     // 정방향 연속성 case abc, bcd, 123, 567 ...
//     if (
//       checkAsciiBetweenWord(temp, temp2) === -1 &&
//       checkAsciiBetweenWord(temp2, temp3) === -1
//     ) {
//       cnt1 = cnt1 + 1;
//     }
//     //
//     if (
//       checkAsciiBetweenWord(temp, temp2) === 1 &&
//       checkAsciiBetweenWord(temp2, temp3) === 1
//     ) {
//       cnt2 = cnt2 + 1;
//     }
//     //반복되는 case
//     if (
//       checkAsciiBetweenWord(temp, temp2) === 0 &&
//       checkAsciiBetweenWord(temp2, temp3) === 0
//     ) {
//       cnt3 = cnt3 + 1;
//     }
//   }
// };

function isSameContinuedValue(value) {
  var temp = "";

  var intCnt = 0;

  for (var i = 0; i < value.length; i++) {
    temp = value.charAt(i);
    console.log("temp", temp);
    console.log("value.charAt(i + 1): ", value.charAt(i + 1));
    console.log("value.charAt(i + 2): ", value.charAt(i + 2));
    if (temp === value.charAt(i + 1) && temp === value.charAt(i + 2)) {
      intCnt = intCnt + 1;
    }
  }

  if (intCnt > 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * testcases
Eqbr5678@!
567cnEO#*
rst927*!U
666eonBW*!
uuuKW529*!
 */

// testValidation("rst927*!U");
console.log(isSameContinuedValue("11123"));
