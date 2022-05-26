function courierExpress(input) {
    // 1.	Тегло на пратката в килограми – реално число в интервала [0.01 ... 150.00]
    let kgParcel = Number(input[0]);
    // 2.	Тип услуга –  текст със следните възможности: "standard" или "express"
    const tapyOfService = input[1];
    // 3.	Разстояние в километри – цяло число в интервала [1 ... 1000]
    const distance = Number(input[2]);
    let priceForKM = 0;
    let flag = false;

    //         •	За пратки по - леки от 1 кг – 3 стотинки на километър.
    if (kgParcel < 1) {
        priceForKM = 0.03;
        // •	От 1 кг до 10 кг – 5 стотинки на километър.
    } else if (kgParcel >= 1 && kgParcel < 10) {
        priceForKM = 0.05;
        // •	От 10 кг вкл. до 40 кг – 10 стотинки на километър.
    } else if (kgParcel >= 10 && kgParcel < 40) {
        priceForKM = 0.10;
        // •	От 40 кг вкл. до 90  кг – 15 стотинки на километър.
    } else if (kgParcel >= 40 && kgParcel < 90) {
        priceForKM = 0.15;
        // •	От 90 кг вкл. до 150 кг – 20 стотинки на километър.
    } else if (kgParcel >= 90 && kgParcel < 150) {
        priceForKM = 0.20;
    }
    let nadcenka = 0;
    if (tapyOfService === "express") {
        //  •	За пратки по - леки от 1 кг – на килограм по 80 % от съответната цена на километър
        if (kgParcel < 1) {
            nadcenka += priceForKM * 0.80;
        } else if (kgParcel >= 1 && kgParcel < 10) {
            // •	От 1 кг до 10  кг – на килограм по 40 % от съответната цена на километър
            nadcenka += priceForKM * 0.40;
            // •	От 10 кг вкл. до 40 кг – на килограм по 5 % от съответната цена на километър
        } else if (kgParcel >= 10 && kgParcel < 40) {
            nadcenka += priceForKM * 0.05;
            // •	От 40 кг вкл. до 90  кг – на килограм по 2 % от съответната цена на километър
        } else if (kgParcel >= 40 && kgParcel < 90) {
            nadcenka += priceForKM * 0.02;
            // •	От 90 кг вкл. до 150 кг – на килограм по 1 % от съответната цена на километър
        } else if (kgParcel >= 90 && kgParcel < 150) {
            nadcenka += priceForKM * 0.01;
        }
        flag = true;
    }
    let total = priceForKM * distance
    if (!flag) {
        console.log(`The delivery of your shipment with weight of ${kgParcel.toFixed(3)} kg. would cost ${total.toFixed(2)} lv.`)
    } else {
        let allTotol = kgParcel * nadcenka
        allTotol = allTotol * distance
        total += allTotol
        console.log(`The delivery of your shipment with weight of ${kgParcel.toFixed(3)} kg. would cost ${total.toFixed(2)} lv.`)
    }

}
courierExpress(["87",
    "express",
    "130"])
