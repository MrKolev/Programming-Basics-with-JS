function repainting(input) {

  const protectedNylon = (Number(input[0]) + 2) * 1.50;
  const paint = ((Number(input[1])) * 14.50);
  const totalPaint = ((paint * 10) / 100) + paint;
  const razreditel = (Number(input[2])) * 5;
  const totalMoney = protectedNylon + totalPaint + razreditel + 0.4;
  const maistor = (((totalMoney * 30)) / 100);
  const total = (maistor * Number(input[3])) + totalMoney;



  console.log(total);
}
repainting(["10 ", "11 ", "4 ", "8 "])
repainting(["5 ", "10 ", "10 ", "1 "])