function hotelRoom(input) {
    const priceStudioMayOctober = 50;
    const priceApartmentMayOctober = 65;

    const priceStudioJuneSeptember = 75.20;
    const priceApartmentJuneSeptember = 68.70;

    const priceStudioJulyAugust = 76;
    const priceApartmentJulyAugust = 77;

    const month = input[0];
    const quantityDays = Number(input[1]);
    let totalSudio = 0;
    let totalApartment = 0;

    switch (month) {
        case "May":
        case "October":
            totalSudio = priceStudioMayOctober * quantityDays;
            totalApartment = priceApartmentMayOctober * quantityDays;
            if (quantityDays > 7 && quantityDays < 14) {
                totalSudio -= totalSudio * 0.05;
            } else if (quantityDays > 14) {
                totalSudio -= totalSudio * 0.30;
            }
            break;
        case "June":
        case "September":
            totalSudio = priceStudioJuneSeptember * quantityDays;
            totalApartment = priceApartmentJuneSeptember * quantityDays;
            if (quantityDays > 14) {
                totalSudio -= totalSudio * 0.20;
            }
            break;
        case "July":
        case "August":
            totalSudio = priceStudioJulyAugust * quantityDays;
            totalApartment = priceApartmentJulyAugust * quantityDays;
            break;
    }
    if (quantityDays > 14) {
        totalApartment -= totalApartment * 0.10;
    }
    console.log(`Apartment: ${totalApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalSudio.toFixed(2)} lv.`)
}
hotelRoom(["May","14"])

