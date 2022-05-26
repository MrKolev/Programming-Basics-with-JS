function fishland(input) {
    let skulriqPrice = Number(input[0]);
    let palamudPrice = skulriqPrice * 1.6
    let cacaPrice = Number(input[1]);
    let midiPrice = 7.5;
    let safridPrice = cacaPrice * 1.8

    let palamudKG = (Number(input[2])) * palamudPrice;
    let safridKG = (Number(input[3])) * safridPrice;
    let midiKG = (Number(input[4])) * midiPrice;
    let total = safridKG + midiKG + palamudKG
    console.log(total.toFixed(2));
}
        fishland([`6.90`, `4.20`, `1.5`, `2.5`, `1`])
