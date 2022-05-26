function skiTrip(input) {
    const roomForOnePerson = 18.00;
    const apartment = 25.00;
    const presidentApartment = 35.00;
    const day = (Number(input[0])) - 1
    const hotel = input[1];
    const rating = input[2];
    let money = 0


    if (hotel === "room for one person") {
        money = day * roomForOnePerson
    }
    if (hotel === "apartment") {
        if (day < 10) {
            money = day * apartment;
            money -= money * 0.30;
        } else if (day >= 10 && day <= 15) {
            money = day * apartment;
            money -= money * 0.35;
        } else {
            money = day * apartment;
            money -= money * 0.50;
        }
    }
    if (hotel === "president apartment") {
        if (day < 10) {
            money = day * presidentApartment
            money -= money * 0.10;
        } else if (day >= 10 && day <= 15) {
            money = day * presidentApartment
            money -= money * 0.15;
        } else {
            money = day * presidentApartment
            money -= money * 0.20;
        }
    }
    if (rating === "positive") {
        money *= 1.25;
    } else {
        money *= 0.90;
    }
    console.log(money.toFixed(2));


}
skiTrip(["30", "president apartment", "negative"])

