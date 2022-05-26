function sumNumbers(input) {
    let index = 0;
    let num = Number(input[index++]);
    let sum = 0;
    while (num > sum) {
        let tempNumber = Number(input[index++]);
        sum += tempNumber
    }
    console.log(sum);
}
sumNumbers(["100",
    "10",
    "20",
    "31",
    "12",
    "40",
"31"])
