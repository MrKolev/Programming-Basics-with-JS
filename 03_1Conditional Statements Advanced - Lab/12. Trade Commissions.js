function tradeCommissions(input) {
    const city = input[0];
    const sale = Number(input[1]);
    let comissions = 0
    if (sale >= 0.1 && sale <= 500) {
        switch (city) {
            case "Sofia": comissions = sale * 0.05; break;
            case "Varna": comissions = sale * 0.045; break;
            case "Plovdiv": comissions = sale * 0.055; break;
        }
    }
    if (sale > 500 && sale <= 1000) {
        switch (city) {
            case "Sofia": comissions = sale * 0.07; break;
            case "Varna": comissions = sale * 0.075; break;
            case "Plovdiv": comissions = sale * 0.08; break;
        }
    }
    if (sale > 1000 && sale <= 10000) {
        switch (city) {
            case "Sofia": comissions = sale * 0.08; break;
            case "Varna": comissions = sale * 0.1; break;
            case "Plovdiv": comissions = sale * 0.12; break;
        }
    }
    if (sale > 10000) {
        switch (city) {
            case "Sofia": comissions = sale * 0.12; break;
            case "Varna": comissions = sale * 0.13; break;
            case "Plovdiv": comissions = sale * 0.145; break;
        }
    }
    if (comissions != 0 || comissions > 0.1) {
        console.log(comissions.toFixed(2))
    }else console.log("error")
}
//tradeCommissions(["Sofia", "1500"])
tradeCommissions(["Plovdiv", "1000"])
