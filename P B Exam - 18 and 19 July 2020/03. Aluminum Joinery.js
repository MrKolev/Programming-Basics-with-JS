function aluminumJoinery(input) {
    const numbJoinery = Number(input[0]);
    const typeOfJoinery = input[1];
    const delivery = input[2];
    let priceJoinery = 0;
    let totalPriceJoinery = 0;
    switch (typeOfJoinery) {
        case "90X130":
            priceJoinery = 110;
            if (numbJoinery > 30 && numbJoinery <= 60) {
                priceJoinery -= priceJoinery * 0.05;

            } else if (numbJoinery > 60) {
                priceJoinery -= priceJoinery * 0.08;
            }
            break;
        case "100X150":
            priceJoinery = 140;
            if (numbJoinery > 40 && numbJoinery <= 80) {
                priceJoinery -= priceJoinery * 0.06;

            } else if (numbJoinery > 80) {
                priceJoinery -= priceJoinery * 0.10;
            }
            break;
        case "130X180":
            priceJoinery = 190;
            if (numbJoinery > 20 && numbJoinery <= 50) {
                priceJoinery -= priceJoinery * 0.07;

            } else if (numbJoinery > 50) {
                priceJoinery -= priceJoinery * 0.12;
            }
            break;
        case "200X300":
            priceJoinery = 250;
            if (numbJoinery > 25 && numbJoinery <= 50) {
                priceJoinery -= priceJoinery * 0.09;

            } else if (numbJoinery > 50) {
                priceJoinery -= priceJoinery * 0.14;
            }
            break;
    }
    switch (delivery) {
        case "With delivery":
            totalPriceJoinery += 60;
            break;
    }
    totalPriceJoinery += priceJoinery * numbJoinery
    if (numbJoinery <= 10) {
        console.log("Invalid order")

    } else if (numbJoinery > 10 && numbJoinery <= 99) {
        console.log(`${totalPriceJoinery.toFixed(2)} BGN`)
    } else {
        totalPriceJoinery -= totalPriceJoinery * 0.04;
        console.log(`${totalPriceJoinery.toFixed(2)} BGN`)
    }

}
aluminumJoinery(["105","100X150", "With delivery"])
