function substitute(input) {
    const k = Number(input[0]);
    const l = Number(input[1]);
    const m = Number(input[2]);
    const n = Number(input[3]);
    let conter = 0


    for (let a = k; a <= 8; a++) {
        for (let b = 9; b >= l; b--) {
            for (let c = m; c <= 8; c++) {
                for (let d = 9; d >= n; d--) {
                    if (conter >= 2) {
                        break;
                    }
                    if (a % 2 === 0 && c % 2 === 0 && b % 2 !== 0 && d % 2 !== 0) {
                        let first = ``
                        let second = ``
                        first += `${a}${b}`
                        second += `${c}${d}`
                        let firstNum = Number(first);
                        let secondNum = Number(second);
                        if (firstNum === secondNum) {
                            console.log("Cannot change the same player.")
                        } else {
                            console.log(`${firstNum} - ${secondNum}`)
                            conter++
                        }
                    }
                }
            }
        }
    }
}

// let K = Number(input[0]);
// let L = Number(input[1]);
// let M = Number(input[2]);
// let N = Number(input[3]);
// let counter = 0;

// for (let i = K; i <= 8; i++) {
//     for (let j = 9; j >= L; j--) {
//         for (let o = M; o <= 8; o++) {
//             for (let p = 9; p >= N; p--) {
//                 if (counter >= 6) {
//                     break;
//                 }
//                 if (i % 2 === 0 && o % 2 === 0 && j % 2 === 1 && p % 2 === 1 && i + "" + j === o + "" + p) {
//                     console.log("Cannot change the same player.");
//                 } else if (i % 2 === 0 && o % 2 === 0) {
//                     if (j % 2 === 1 && p % 2 === 1) {
//                         console.log(`${i}${j} - ${o}${p}`);
//                         counter++;
//                     }
//                 }
//             }
//         }
//     }
// }
// }

substitute(["6", "7", "5", "6"])

