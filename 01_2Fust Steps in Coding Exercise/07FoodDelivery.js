function foodDelivery(input) {

    const chikenDelivered = (Number(input[0])) * 10.35;
    const fishDelivery = (Number(input[1])) * 12.40;
    const veganDelivery = (Number(input[2])) * 8.15;
    const dessertDelivery = ((chikenDelivered + fishDelivery + veganDelivery) * 20) / 100;
    const total = chikenDelivered + fishDelivery + veganDelivery + dessertDelivery + 2.5;

    console.log(total);


}

foodDelivery(["2 ", "4 ", "3 "])
foodDelivery(["9 ", "2 ", "6 "])