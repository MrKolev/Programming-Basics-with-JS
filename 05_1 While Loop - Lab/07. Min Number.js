function minNumber(input) {
    let index = 0;
    let minNum = Number.MAX_SAFE_INTEGER;
    let comand = input[index++];
    while (comand !== "Stop"){
        let num = Number(comand);
        if (num < minNum){
            minNum = num;
        }
        comand = input[index++];
    }
console.log(minNum);
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
