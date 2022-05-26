function accountBalance(input) {
    let index = 0;
    let comand = input[index++];
    let total = 0;

    while (comand !== "NoMoreMoney") {
        let amountPaid = Number(comand);
        if (amountPaid <= 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log("Increase: " + amountPaid.toFixed(2));
        total += amountPaid;
        comand = input[index++];
    }
    console.log("Total: " + total.toFixed(2));
}
accountBalance(["120",
"45.55",
"-150"])
