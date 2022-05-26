function moving(input) {
    const width = Number(input[0]);
    const length = Number(input[1]);
    const height = Number(input[2]);
    let index = 3;
    let numBox = input[index];
    let cubicMetersAvailable = width * height * length;
    let filledCubicMeters = 0;
    let done = false;


    while (cubicMetersAvailable > filledCubicMeters) {
        if (numBox === "Done") {
            let leftCubicMeters = cubicMetersAvailable - filledCubicMeters;
            console.log(`${leftCubicMeters} Cubic meters left.`);
            done = true;
            break;
        }
        filledCubicMeters += Number(numBox);
        index++;
        numBox = input[index];

    }
    if (!done) {
        let neetCubicMeters = filledCubicMeters - cubicMetersAvailable
        console.log(`No more free space! You need ${neetCubicMeters} Cubic meters more.`)
    }
}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])
