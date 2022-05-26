function combinations(input) {
    const n = Number(input[0]);
    let c = 0
    for (let x = 0; x <= n; x++) {
        for (let y = 0; y <= n; y++) {
            for (let z = 0; z <= n; z++) {
                let res = x + y + z
                if (res === n) {
                    c++
                }
            }
        }
    }
    console.log(c)
}
combinations(["25"]);