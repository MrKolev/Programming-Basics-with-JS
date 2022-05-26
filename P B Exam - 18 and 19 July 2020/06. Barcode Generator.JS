function barcodeGenerator(input) {
    const firstNumber = input[0];
    const secondNumber = input[1];;
    let text = "";

    for (let a = Number(firstNumber.charAt(0)); a <= Number(secondNumber.charAt(0)); a++) {
        for (let b = Number(firstNumber.charAt(1)); b <= Number(secondNumber.charAt(1)); b++) {
            for (let c = Number(firstNumber.charAt(2)); c <= Number(secondNumber.charAt(2)); c++) {
                for (let d = Number(firstNumber.charAt(3)); d <= Number(secondNumber.charAt(3)); d++) {
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                        text +=`${a}${b}${c}${d} `
                    }

                }
            }
        }
    }
    console.log(text)
}
barcodeGenerator(["3256",
"6579"])
