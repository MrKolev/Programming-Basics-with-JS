function operationsBetweenNumbers(input) {
    const num1 = Number(input[0]);
    const num2 = Number(input[1]);
    const operator = input[2];
    let result = 0

    if (operator === "+") {
        result = num1 + num2;
        if (result % 2 != 0) {
            console.log(`${num1} ${operator} ${num2} = ${result} - odd`)
        } else {
            console.log(`${num1} ${operator} ${num2} = ${result} - even`)
        }
    }
    if (operator === "-") {
        result = num1 - num2;
        if (result % 2 != 0) {
            console.log(`${num1} ${operator} ${num2} = ${result} - odd`)
        } else {
            console.log(`${num1} ${operator} ${num2} = ${result} - even`)
        }
    }
    if (operator === "*") {
        result = num1 * num2;
        if (result % 2 != 0) {
            console.log(`${num1} ${operator} ${num2} = ${result} - odd`)
        } else {
            console.log(`${num1} ${operator} ${num2} = ${result} - even`)
        }
    }
    if (operator === "%") {
        if (num1 === 0 || num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`)
        } else {
            console.log(`${num1} % ${num2} = ${num1 % num2}`)
        }
    }
    if (operator === "/") {
        if (num1 === 0 || num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`)
        } else {
            console.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`)
        }
    }

}
operationsBetweenNumbers(["10", "9", "-"])
