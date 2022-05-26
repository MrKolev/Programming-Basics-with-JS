function equalSumsEvenOddPosition(input) {
    const start = Number(input[0]);
    const end = Number(input[1]);
    let print = ""
    for (let num = start; num <= end; num++) {
        let nextNum = "" + num;
        let evenSum = 0;
        let oddSum = 0;
        for (let i = 0; i < nextNum.length; i++) {
            let digit = Number(nextNum[i]);
            if (i % 2 === 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }
        if (evenSum === oddSum) {
            print += `${nextNum} `;
        }
    }
    console.log(print);
}
equalSumsEvenOddPosition(["123456",
"124000"])
