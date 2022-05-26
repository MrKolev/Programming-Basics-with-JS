function cinema(input) {
    const projection = input[0];
    const rows = Number(input[1]);
    const columns = Number(input[2]);
    const incame = rows * columns;
    let totalMoney = 0;
    if (projection === "Premiere") {
        totalMoney = incame * 12;
    }
    else if (projection === "Normal") {
        totalMoney = incame * 7.5;
    }
    else if (projection === "Discount") {
        totalMoney = incame * 5;
    }
    console.log(`${totalMoney.toFixed(2)} leva`)
}

cinema(["Premiere", "10", "12"])
cinema(["Normal", "21", "13"])

