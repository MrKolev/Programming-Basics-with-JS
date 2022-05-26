function worldSwimmingRecord(input) {

    const secondsWR = Number(input[0]);
    const meters = Number(input[1]);
    const secondForOneMeter = Number(input[2]);

    const secondAddeds = Math.floor(meters / 15) * 12.5;
    const swimingTime = meters * secondForOneMeter + secondAddeds;

    if (swimingTime >= secondsWR) {
        let secondsSlower = swimingTime - secondsWR;
        console.log(`No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${swimingTime.toFixed(2)} seconds.`)
    }


}

worldSwimmingRecord(["30467", "1500", "20"])
worldSwimmingRecord(["55555.67", "3017", "5.03"])
