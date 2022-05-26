function coins(input) {
    const change = Number(input[0]);
    let convertedOfChange = parseInt(change * 100);
    let coin = 0
    while (convertedOfChange > 0) {
        if (convertedOfChange >= 200) {
            convertedOfChange -= 200;
        } else if (convertedOfChange >= 100) {
            convertedOfChange -= 100;
        } else if (convertedOfChange >= 50) {
            convertedOfChange -= 50;
        } else if (convertedOfChange >= 20) {
            convertedOfChange -= 20;
        } else if (convertedOfChange >= 10) {
            convertedOfChange -= 10;
        } else if (convertedOfChange >= 5) {
            convertedOfChange -= 5;
        } else if (convertedOfChange >= 2) {
            convertedOfChange -= 2;
        } else if (convertedOfChange >= 1) {
            convertedOfChange -= 1;
        }
        coin++;
    }
    console.log(coin);
}
coins(["1.20"])