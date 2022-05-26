function aeaOfFigures(input) {
    let [type, lengthA, lengthB] = input;
    let result = 0;
    type === `square` ? result = Number(lengthA) * Number(lengthA) : null;
    type === `rectangle` ? result = Number(lengthA) * Number(lengthB) : null;
    type === `circle` ? result = Math.PI * Math.pow(Number(lengthA), 2) : null;
    type === `triangle` ? result = (Number(lengthA) * Number(lengthB)) / 2 : null;
    console.log(result.toFixed(3));
}

aeaOfFigures(["triangle", `4.5`, "20"])

aeaOfFigures(["circle", "6"])

aeaOfFigures(["rectangle", "7", "2.5"])

aeaOfFigures(["square", "5"])