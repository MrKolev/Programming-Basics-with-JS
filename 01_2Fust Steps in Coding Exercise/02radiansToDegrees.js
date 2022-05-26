function radiansToDegrees(input) {
    const radi = Number(input[0]);
    const degrees = radi * 180 / Math.PI

    console.log(degrees)

}

radiansToDegrees(["3.1416"]);
radiansToDegrees(["6.2832"]);
