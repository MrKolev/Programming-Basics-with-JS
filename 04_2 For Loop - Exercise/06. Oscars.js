function oscars(input) {
    let index = 0;
    const name = input[index++];
    let points = Number(input[index++]);
    const numberOfJuries = Number(input[index++]);

    for (i = 1; i <= numberOfJuries; i++) {
        let juries = input[index++]
        let pointsJuries = Number(input[index++])
        points += ((juries.length * pointsJuries) / 2);
        if (points > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`)
            break; 
        }
    }
    if (points <= 1250.5) {
        let needPoints = 1250.5 - points
        console.log(`Sorry, ${name} you need ${needPoints.toFixed(1)} more!`)
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
