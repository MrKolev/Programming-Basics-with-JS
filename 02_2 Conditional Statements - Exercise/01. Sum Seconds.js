function sumSeconds(input) {
    const first = Number(input[0]);
    const second = Number(input[1]);
    const third = Number(input[2]);

    const totalTime = first + second + third;
    const minutes = Math.floor(totalTime / 60);
    const seconds = Math.floor(totalTime % 60);
    if (seconds < 10) {

        console.log(`${Math.floor(minutes)}:0${Math.floor(seconds)}`);
    } else {
        console.log(`${Math.floor(minutes)}:${Math.floor(seconds)}`);
    }
}

sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"])