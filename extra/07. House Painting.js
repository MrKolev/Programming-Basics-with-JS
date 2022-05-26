function housePainting(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    let green = 3.4;
    let red = 4.3;

    let walls = x * x;
    let window = 1.5 * 1.5;
    let wallsTotal = (walls * 2) - (window * 2);
    let rearWalls = x * y;
    let dors = 1.2 * 2;
    let wallsFRTotal = (rearWalls * 2) - dors;
    let total = wallsFRTotal + wallsTotal;
    let totalGreen = total / green;

    let roof = (x * y) * 2;
    let traengle = ((x * h) / 2) * 2;
    let totalRoof = roof + traengle;
    let totalRed = totalRoof / red;
    console.log(totalGreen.toFixed(2));
    console.log(totalRed.toFixed(2));

}
housePainting([`6`, `10`, `5.2`])
housePainting([`10.25`, `15.45`, `8.88`])