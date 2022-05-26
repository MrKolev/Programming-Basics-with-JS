function deposit(input) {


const money = Number(input[0]);
const period = Number(input[1]);
const percent = Number(input[2]);
const interest = (money * percent) / 100
const interestMonths = interest / 12
const finalmoney = money + (period * interestMonths)

console.log(finalmoney)
}

deposit(["200 ", '3', '5.7'])
deposit(["2350","6 ","7 "])

