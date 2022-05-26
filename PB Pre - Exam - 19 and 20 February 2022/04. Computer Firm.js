function computerFirm(input) {
    const prodajbi1 = Number(input[0])
    let totalProdajbi = 0
    let totalReiting = 0
    for (let i = 1; i <= prodajbi1; i++) {
        let reiting = 0
        let vazmojniProdajbi = ''
        let nextNum = input[i];
        let index = 0
        vazmojniProdajbi += nextNum[index++];
        vazmojniProdajbi += nextNum[index++];
        reiting = Number(nextNum[index]);
        totalReiting += reiting;
        let prodajbi = Number(vazmojniProdajbi);
        if (reiting == 2) {
            continue;
        } else if (reiting === 3) {
            totalProdajbi += prodajbi / 2
        } else if (reiting === 4) {
            totalProdajbi += prodajbi * 0.70;
        } else if (reiting === 5) {
            totalProdajbi += prodajbi * 0.85;
        } else if (reiting === 6) {
            totalProdajbi += prodajbi
        }
    }
    let allreiting = totalReiting / prodajbi1
    console.log(totalProdajbi.toFixed(2))
    console.log(allreiting.toFixed(2))

}
computerFirm(["5", "122", "156", "202", "214", "185"])
