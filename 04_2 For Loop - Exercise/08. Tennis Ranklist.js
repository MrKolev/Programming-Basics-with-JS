function tennisRanklist(input) {
    let index = 0;
    const numTornirs = Number(input[index++]);
    let startPoints = Number(input[index++]);
    let tornirPoints = 0;
    let numWinTornirs = 0;
    for (i = 2; i <= input.length; i++) {
        let tornir = input[i]
        switch (tornir) {
            case "W":
                tornirPoints += 2000;
                numWinTornirs++
                break;
            case "F":
                tornirPoints += 1200;
                break;
            case "SF":
                tornirPoints += 720;
                break;

        }
    }
    let totalPoints = startPoints + tornirPoints
    let averagePoints = tornirPoints / numTornirs;
    let procentTornirs = numWinTornirs / numTornirs * 100
    console.log(`Final points: ${Math.floor(totalPoints)}`)
    console.log(`Average points: ${Math.floor(averagePoints)}`)
    console.log(`${procentTornirs.toFixed(2)}%`)
}

tennisRanklist(["5", "1400.55", "F", "SF", "W", "W", "SF"])
