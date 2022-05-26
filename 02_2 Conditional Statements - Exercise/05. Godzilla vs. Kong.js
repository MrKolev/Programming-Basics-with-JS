function godzillaVsKong(input) {

    const budget = Number(input[0]);
    const filmPeople = Number(input[1]);
    const pricepPerCloutingFilmPeople = Number(input[2]);
    const decor = budget * 0.10;
    let totalMoneyForClouting = filmPeople * pricepPerCloutingFilmPeople;
    if (filmPeople > 150) {
        totalMoneyForClouting *= 0.90;
    }
    let moneyTotal = decor + totalMoneyForClouting;
    if (moneyTotal > budget) {
        console.log("Not enough money!");
        let moneyNeedForFilm = moneyTotal - budget;
        console.log(`Wingard needs ${moneyNeedForFilm.toFixed(2)} leva more.`)
    } else {
        moneyTotal < budget;
        console.log("Action!");
        let overMoney = budget - moneyTotal;
        console.log(`Wingard starts filming with ${overMoney.toFixed(2)} leva left.`)

    }

}

godzillaVsKong(["20000", "120", "55.5"])
godzillaVsKong(["9587.88", "222", "55.68"])

