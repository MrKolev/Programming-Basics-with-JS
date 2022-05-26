function balls(input) {
    const numbBalls = Number(input[0])
    let points = 0;
    let redballs = 0;
    let orangeballs = 0;
    let yellowballs = 0;
    let whiteballs = 0;
    let blackballs = 0;
    let allBalls = 0;
    for (let i = 1; i <= numbBalls; i++) {
        allBalls++;
        switch (input[i]) {
            case "red":
                points += 5;
                redballs++;
                break;
            case "orange":
                points += 10;
                orangeballs++;
                break;
            case "yellow":
                points += 15;
                yellowballs++;
                break;
            case "white":
                points += 20;
                whiteballs++;
                break;
            case "black":
                points = Math.floor(points / 2);
                blackballs++
                break;
        }

    }
    allBalls -= redballs + orangeballs + yellowballs + whiteballs + blackballs;
    console.log(`Total points: ${points} `)
    console.log(`Red balls: ${redballs} `)
    console.log(`Orange balls: ${orangeballs} `)
    console.log(`Yellow balls: ${yellowballs} `)
    console.log(`White balls: ${whiteballs} `)
    console.log(`Other colors picked: ${allBalls} `)
    console.log(`Divides from black balls: ${ blackballs } `)
}
balls(["3",
    "white",
    "black",
    "pink"])
