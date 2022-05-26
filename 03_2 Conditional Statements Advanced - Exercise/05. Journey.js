function journey(input) {
    const budget = Number(input[0]);
    const season = input[1];
    let spentMoney = 0;
    if (budget <= 100) {
        if (season === "summer") {
            spentMoney = budget * 0.30;
            console.log("Somewhere in Bulgaria")
            console.log(`Camp - ${spentMoney.toFixed(2)}`)
        } else {
            spentMoney = budget * 0.70;
            console.log("Somewhere in Bulgaria")
            console.log(`Hotel - ${spentMoney.toFixed(2)}`)
        }
    } else if (budget > 100 && budget <= 1000) {
        if (season === "summer") {
            spentMoney = budget * 0.40;
            console.log("Somewhere in Balkans")
            console.log(`Camp - ${spentMoney.toFixed(2)}`)
        } else {
            spentMoney = budget * 0.80;
            console.log("Somewhere in Balkans")
            console.log(`Hotel - ${spentMoney.toFixed(2)}`)
        }
    } else if (budget > 1000) {
        spentMoney = budget * 0.90;
        console.log("Somewhere in Europe")
        console.log(`Hotel - ${spentMoney.toFixed(2)}`)
    }
}
journey(["75", "winter"])

