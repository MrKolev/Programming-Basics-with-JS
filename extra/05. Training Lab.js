function trainingLab(input){
const w = ((Number(input[0])) * 100);
const h = ((Number(input[1])) * 100) - 100;
zaeti = 3
let bura = (w - (w % 120)) / 120;
 let stolove = (h - (h % 70)) / 70;
 let tot = bura * stolove - zaeti
 console.log(tot);



}
trainingLab([`8.45`, `5.2`])