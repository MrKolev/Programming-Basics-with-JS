function cake(input) {
    const widht = Number(input[0]);
    const length = Number(input[1]);
    let totalCake = widht * length;
    let index = 2;
    let comand = input[index++];
    while (totalCake > 0) {
        if (comand === "STOP") {
            console.log(`${totalCake} pieces are left.`);
            break;
        }
        totalCake -= Number(comand);
        comand = input[index++];
    }
    if (totalCake <= 0) {
        console.log(`No more cake left! You need ${Math.abs(totalCake)} pieces more.`);
    }

}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

