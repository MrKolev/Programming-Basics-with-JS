function sumOfTwoNumbers(input) {
    const start = Number(input[0]);
    const end = Number(input[1]);
    const medgicNumber = Number(input[2]);
    let counter = 0;
    let flags = false;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            let sum = i + j;
            counter++;
            if (sum === medgicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${medgicNumber})`)
                flags = true;
                break;
            }
        }
        if (flags) {
            break;
        }
    }
    if (!flags) {
        console.log(`${counter} combinations - neither equals ${medgicNumber}`)
    }
}
sumOfTwoNumbers(["88",
"888",
"1000"])
