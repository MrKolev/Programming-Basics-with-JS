function basketballEquipment(input){
    const yearTax = Number(input[0]);
    const sneakers = (1 - 0.4) * yearTax
    const basketballsuit = sneakers - sneakers * 0.2;
    const basketBall = basketballsuit /4;
    const basketstaf = basketBall / 5;
    const total = sneakers + basketballsuit + basketBall + basketstaf + yearTax;

    console.log(total);

}
basketballEquipment([365])