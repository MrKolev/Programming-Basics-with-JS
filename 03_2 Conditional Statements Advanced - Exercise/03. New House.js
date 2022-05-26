function newHouse(input) {
    const typeOfFlower = input[0];
    const quantityFlower = Number(input[1]);
    const budget = Number(input[2]);

    const roses = 5;
    const dahlias = 3.8;
    const tulips = 2.8;
    const narcissus = 3;
    const gladiolus = 2.5;
    let totalPrice = 0;

    switch (typeOfFlower) {
        case "Roses":
            if (quantityFlower > 80) {
                totalPrice -= roses * quantityFlower * 0.10;
            }
            totalPrice += roses * quantityFlower;
            break;
        case "Dahlias":
            if (quantityFlower > 90) {
                totalPrice -= dahlias * quantityFlower * 0.15
            }
            totalPrice += dahlias * quantityFlower;
            break;
        case "Tulips":
            if (quantityFlower > 80) {
                totalPrice -= tulips * quantityFlower * 0.15;
            }
            totalPrice += tulips * quantityFlower;
            break;
        case "Narcissus":
            if (quantityFlower < 120) {
                totalPrice += narcissus * quantityFlower * 0.15;
            }
            totalPrice += narcissus * quantityFlower;
            break;
        case "Gladiolus":
            if (quantityFlower < 80) {
                totalPrice += gladiolus * quantityFlower * 0.20;
            }
            totalPrice += gladiolus * quantityFlower;
            break;
    }
    if (budget >= totalPrice) {
        const moneyLeft = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${quantityFlower} ${typeOfFlower} and ${moneyLeft.toFixed(2)} leva left.`);
    }
    else {
       const moneyNeed = totalPrice - budget;
        console.log(`Not enough money, you need ${moneyNeed.toFixed(2)} leva more.`);
    }
}

newHouse(["Narcissus", "119", "360"])