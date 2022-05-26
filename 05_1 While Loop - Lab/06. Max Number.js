function maxNumber(input){
    let index = 0
    let comand = input[index++];
    let maxNum = Number.MIN_SAFE_INTEGER
    while(comand !== "Stop"){
        let num = Number(comand);
        if (num > maxNum){
            maxNum = num;
        }
        comand = input[index++];
    }
    console.log(maxNum)
}
maxNumber(["-100",
"-99",
"-80",
"-70",
"Stop"])
