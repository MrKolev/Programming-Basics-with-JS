function walking(input) {
    const reached = 10000;
    let index = 0;
    let totalStep = 0;

    while (totalStep <= reached) {
        let nextDay = (input[index]);
        if (nextDay === "Going home") {
            index ++
            nextDay = Number(input[index]);
            totalStep += nextDay;
            break;
        }
        nextDay = Number(nextDay);
        totalStep += nextDay;
        index++;

    }
    let diff = Math.abs(totalStep - reached);
    if (totalStep >= reached) {
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    }else if (totalStep <= reached) {
        console.log(`${diff} more steps to reach goal.`)
    }
}
walking(["1500", "300", "2500", "3000", "Going home", "200"])
