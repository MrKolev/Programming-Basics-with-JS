function agencyProfit(input) {
    const name = input[0];
    const priceTax = Number(input[4]);
    const numbTiketAdults = Number(input[1]);
    const priceTiketAbults = Number(input[3]);
    const priceTiketAbultsAfterTax = priceTiketAbults + priceTax;

    const numbTiketKids = Number(input[2]);
    const priceTiketKids = priceTiketAbults - (priceTiketAbults * 0.70);
    const priceTiketKidsAfterTax = priceTiketKids + priceTax;

    const totalTiket = (numbTiketAdults * priceTiketAbultsAfterTax) + (numbTiketKids * priceTiketKidsAfterTax);
    const totalProfit = totalTiket * 0.20;
    console.log(`The profit of your agency from ${name} tickets is ${totalProfit.toFixed(2)} lv.`);

}
agencyProfit(["WizzAir", "15", "5", "120", "40"])

