function fishingBoat(input) {
    const priceSpring = 3000;
    const priceSummerAndAutumn = 4200;
    const priceWinter = 2600;
    const budget = Number(input[0]);
    const season = input[1];
    const quantityFishers = Number(input[2]);
    let totalPrice = 0

    if (season === "Spring") {
        totalPrice = priceSpring;
    } else if (season === "Summer") {
        totalPrice = priceSummerAndAutumn;
    } else if (season === "Autumn") {
        totalPrice = priceSummerAndAutumn;
    } else if (season === "Winter") {
        totalPrice = priceWinter;
    }
    if (quantityFishers <= 6) {
        totalPrice *= 0.9;
    } else if (quantityFishers > 7 && quantityFishers <= 11) {
        totalPrice *= 0.85;
    } else if (quantityFishers > 11) {
        totalPrice *= 0.75;
    }
    if (quantityFishers % 2 === 0 && season != "Autumn") {
        totalPrice *= 0.95;
    }
    if (budget >= totalPrice) {
        const moneyLeft = budget - totalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        const monyeNeed = totalPrice - budget;
        console.log(`Not enough money! You need ${monyeNeed.toFixed(2)} leva.`)
    }

}
fishingBoat(["3000", "Summer", "11"])
//fishingBoat(["3600", "Autumn", "6"])
//fishingBoat(["2000", "Winter", "13"])



