function maidenParty(input) {
    // 1.	Цена на моминското парти - реално число в интервала [1.00 … 10000.00]
    const partyPrice = Number(input[0]);
    // 2.	Брой любовни послания - цяло число в интервала [0… 1000]
    const numLoves = Number(input[1]);
    // 3.	Брой восъчни рози - цяло число в интервала [0 … 1000]
    const numRoses = Number(input[2]);
    // 4.	Брой ключодържатели - цяло число в интервала [0 … 1000]
    const numKyes = Number(input[3]);
    // 5.	Брой карикатури - цяло число в интервала [0 … 1000]
    const numKarikaturi = Number(input[4]);
    // 6.	Брой късмети изненада - цяло число в интервала [0 … 1000]
    const numSuprase = Number(input[5]);
    // •	Любовно послание - 0.60 лв.
    // •	Восъчна роза - 7.20 лв.
    // •	Ключодържател - 3.60 лв.
    // •	Карикатура - 18.20 лв.
    // •	Късмет изненада - 22 лв.

    let totalMoney = (numLoves * 0.60) + (numRoses * 7.20) + (numKyes * 3.60) + (numKarikaturi * 18.20) + (numSuprase * 22)
    let prodajbi = numLoves + numRoses + numKyes + numKarikaturi + numSuprase;
    if (prodajbi >= 25) {
        totalMoney -= totalMoney * 0.35;
    }

    totalMoney -= totalMoney * 0.10;

    if (totalMoney >= partyPrice) {
        let mor = totalMoney - partyPrice
        console.log(`Yes! ${mor.toFixed(2)} lv left.`)
    } else if (partyPrice > totalMoney) {
        let need = partyPrice - totalMoney
        console.log(`Not enough money! ${need.toFixed(2)} lv needed.`)
    }
}
maidenParty(["320",
"8",
"2",
"5",
"5",
"1"])
