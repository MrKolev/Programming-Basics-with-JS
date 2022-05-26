function cleverLily(input) {
    const yaersLily = Number(input[0]);
    const laundryPrice = Number(input[1]);
    const priceToy = Number(input[2]);
    let moenyLily = 0;
    let toyLily = 0;
    let moenyForBday = 10;
    for (i = yaersLily; i >= 1; i--) {
        if (i % 2 === 0) {
            moenyLily+= moenyForBday;
            moenyForBday += 10;
            moenyLily -= 1;
        } else {
            toyLily++;
        }
    }
    moenyLily += toyLily * priceToy
    if (moenyLily >= laundryPrice) {
        console.log(`Yes! ${(moenyLily - laundryPrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(laundryPrice - moenyLily).toFixed(2)}`)
    }

}
cleverLily(["10", "170.00", "6"])
cleverLily(["21", "1570.98", "3"])

