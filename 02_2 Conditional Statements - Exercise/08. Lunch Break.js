function lunchBreak(input) {

    const nameSerial = (input[0]);
    const timeSerial = Number(input[1]);
    const totalTimeBreak = Number(input[2]);

    const timeForLunch = totalTimeBreak / 8;
    const timeForBreak = totalTimeBreak / 4;
    const restTime = totalTimeBreak - timeForLunch - timeForBreak;

    if (restTime >= timeSerial) {
        const moreTime = restTime - timeSerial;
        console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(moreTime)} minutes free time.`);

    } else {
        const needTime = timeSerial - restTime;
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(needTime)} more minutes.`);

    }
}
lunchBreak(["Game of Thrones", "60", "10"])
//lunchBreak(["Teen Wolf", "48", "60"])


