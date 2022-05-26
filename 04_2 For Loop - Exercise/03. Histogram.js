function histogram(input) {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    const n = Number(input[0]);
    for (i = 1; i <= n; i++) {
        let num = input[i];
        if (num < 200) {
            p1 = p1 + 1;
        } else if (num >= 200 && num <= 399) {
            p2 = p2 + 1;
        } else if (num >= 400 && num <= 599) {
            p3 = p3 + 1;
        } else if (num >= 600 && num <= 799) {
            p4 = p4 + 1;
        } else {
            p5 = p5 + 1;
        }
    }
    p1 = (p1 / n) * 100;
    p2 = (p2 / n) * 100;
    p3 = (p3 / n) * 100;
    p4 = (p4 / n) * 100;
    p5 = (p5 / n) * 100;
    console.log(`${p1.toFixed(2)}%`)
    console.log(`${p2.toFixed(2)}%`)
    console.log(`${p3.toFixed(2)}%`)
    console.log(`${p4.toFixed(2)}%`)
    console.log(`${p5.toFixed(2)}%`)
}
histogram([20, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])