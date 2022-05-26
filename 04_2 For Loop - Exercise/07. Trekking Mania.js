function trekkingMania(input) {
    let index = 0;
    const grupNumber = Number(input[index++]);
    let totalPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (i = 1; i <= grupNumber; i++) {
        let num = Number(input[i]);
        totalPeople += num;
        if (num <= 5) {
            musala += num;
        } else if (num >= 6 && num <= 12) {
            monblan += num;
        } else if (num >= 13 && num <= 25) {
            kilimandjaro += num;
        } else if (num >= 26 && num <= 40){
            k2 += num;
        }else if (num >= 41){
            everest += num;
        }
    }
    let mountMusala = (musala / totalPeople) * 100;
    let mountMonblan = (monblan / totalPeople) * 100;
    let mountKalimandjaro = (kilimandjaro / totalPeople) * 100;
    let mountK2 = (k2 / totalPeople) * 100;
    let mountEverest = (everest / totalPeople) * 100;

    console.log(`${mountMusala.toFixed(2)}%`)
    console.log(`${mountMonblan.toFixed(2)}%`)
    console.log(`${mountKalimandjaro.toFixed(2)}%`)
    console.log(`${mountK2.toFixed(2)}%`)
    console.log(`${mountEverest.toFixed(2)}%`)
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
