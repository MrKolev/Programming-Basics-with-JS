function toyShop(input) {

    const puzzlePrice = 2.60;
    const talckingDollPrice = 3;
    const teddyBearPrice = 4.10;
    const minionsPrice = 8.20;
    const truckPrice = 2;

    const vacationPrice = Number(input[0]);

    const puzzleQuantity = Number(input[1]);
    const talckingDollQuantity = Number(input[2]);
    const teddyBearQuantity = Number(input[3]);
    const minionsQuantity = Number(input[4]);
    const truckQuantity = Number(input[5]);

    let totalToy = puzzleQuantity + talckingDollQuantity +
        teddyBearQuantity + minionsQuantity + truckQuantity

    let totalPrice = puzzleQuantity * puzzlePrice +
        talckingDollQuantity * talckingDollPrice +
        teddyBearQuantity * teddyBearPrice +
        minionsQuantity * minionsPrice +
        truckQuantity * truckPrice;
    if (totalToy >= 50) {
        totalPrice -= (totalPrice * 0.25);
    }
    totalPrice -= (totalPrice * 0.10);

    let deficit = Math.abs(totalPrice - vacationPrice);

    if (totalPrice >= vacationPrice) {
        console.log(`Yes! ${deficit.toFixed(2)} lv left.`);


    } else {
        console.log(`Not enough money! ${Math.abs(totalPrice - vacationPrice).toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"])
toyShop(["320", "8", "2", "5", "5", "1"])

