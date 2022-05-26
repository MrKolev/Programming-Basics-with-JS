function addBags(imput) {
    
    const priceBagsUP20kg = Number(imput[0]);
    const kgToBags = Number(imput[1]);
    const daysToFlight = Number(imput[2]);
    const numbBags = Number(imput[3]);

    let priceBags = 0;
    if (kgToBags < 10) {
        priceBags = priceBagsUP20kg * 0.20;
    } else if (kgToBags >= 10 && kgToBags <= 20) {
        priceBags = priceBagsUP20kg * 0.50;
    } else if (kgToBags > 20) {
        priceBags = priceBagsUP20kg;
    }
    if (daysToFlight > 30){
        priceBags += priceBags * 0.1;
    }else if (daysToFlight <= 30 && daysToFlight >= 7){
        priceBags += priceBags * 0.15;
    }else if (daysToFlight < 7 ){
        priceBags += priceBags * 0.40;
    }
    let total = priceBags * numbBags
    console.log(`The total price of bags is: ${total.toFixed(2)} lv.` )
}
addBags(["30",
"18",
"15",
"2"])
