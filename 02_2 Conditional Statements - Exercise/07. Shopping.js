function shopping(input) {
    const budget = Number(input[0]);
    const countVideoCard = Number(input[1]);
    const countPocesor = Number(input[2]);
    const countRAM = Number(input[3]);
    const priceVideoCard = 250
    let pricePocesor = (countVideoCard * priceVideoCard) * 0.35;
    let priceRAM = (countVideoCard * priceVideoCard) * 0.10;
    let totalMoney = countVideoCard * priceVideoCard + countPocesor * pricePocesor + countRAM * priceRAM;
    if (countVideoCard > countPocesor) {
        totalMoney *= 0.85;
    }
    if (budget >= totalMoney) {
        let remainder = budget - totalMoney;
        console.log(`You have ${remainder.toFixed(2)} leva left!`);

    } else {
        let needMoney = totalMoney - budget;
        console.log(`Not enough money! You need ${needMoney.toFixed(2)} leva more!`);
    }

}
shopping(["900", "2", "1", "3"])
shopping(["920.45", "3", "1", "1"])

