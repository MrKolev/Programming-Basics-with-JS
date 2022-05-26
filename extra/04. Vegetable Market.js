function vegetableMarket(input){
const vegetabelsPrice = Number(input[0]);
const fruitsPrice = Number(input[1]);
const vegetabels = Number(input[2]);
const fruit = Number(input[3]);
const eu = 1.94;
let totalPriceBG = (vegetabelsPrice * vegetabels) + (fruitsPrice * fruit);
let totalPriceEU = totalPriceBG / eu;
console.log(totalPriceEU.toFixed(2));
}
vegetableMarket([`1.5`, `2.5`, `10`, `10`]);
  