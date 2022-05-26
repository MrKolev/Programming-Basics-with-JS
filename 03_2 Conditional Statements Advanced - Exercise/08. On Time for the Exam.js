function onTimeForTheExam(input) {
    // INPUT
    const hourExam = Number(input[0]);
    const minuteExam = Number(input[1]);
    const hourArrival = Number(input[2]);
    const minuteArrival = Number(input[3]);

    const totalExam = hourExam * 60 + minuteExam;
    const totalArrival = hourArrival * 60 + minuteArrival;
    const totalDifference = Math.abs(totalExam - totalArrival);
    const hourDiff = Math.floor(totalDifference / 60);
    let minDiff = totalDifference % 60;
    if (minDiff  === 0 || (minDiff < 10 && hourDiff > 0)) {
        minDiff = `0${minDiff}`;
    }

    if (totalExam === totalArrival) {
        console.log("On time")
    } else if (totalArrival > totalExam && totalDifference < 60) {
        console.log("Late");
        console.log(`${minDiff} minutes after the start`)
    } else if (totalArrival > totalExam && totalDifference >= 60) {
        console.log("Late");
        console.log(`${hourDiff}:${minDiff} hours after the start`)
    } else if (totalDifference <= 30){
        console.log("On time")
        console.log(`${Number(minDiff)} minutes before the start`)
    
    } else if (totalArrival < totalExam && totalDifference < 60) {
        console.log("Early")
        console.log(`${minDiff} minutes before the start`)
    } else if (totalArrival < totalExam && totalDifference >= 60) {
        console.log("Early");
        console.log(`${hourDiff}:${minDiff} hours before the start`)
    }

}
onTimeForTheExam(["14", "00", "13", "55"])