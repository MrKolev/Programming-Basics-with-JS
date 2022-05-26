function bestPlayer(input) {
    let index = 0;
    let comand = input[index];
    let name = "";
    let gol = 0;

    while (comand !== "END") {
        let nextName = input[index++];
        let nextGol = Number(input[index++]);
        if (nextGol > gol) {
            gol = nextGol;
            name = nextName;
        } else if (gol >= 10) {
            comand = "END";
            break;
        }
        comand = input[index];
    }
    console.log(`${name} is the best player!`);
    if (gol < 3) {
        console.log(`He has scored ${gol} goals.`);
    } else if (gol >= 3) {
        console.log(`He has scored ${gol} goals and made a hat-trick !!!`)
    }
}
bestPlayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])
