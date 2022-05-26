function building(input) {
    const x = Number(input[0]);
    const y = Number(input[1]);

    for (let floor = x; floor >= 1; floor--) {
        let result = ""
        for (let rooms = 0; rooms < y; rooms++) {
            if (floor === x) {
                result += `L${floor}${rooms} `
            } else if(floor % 2 === 0){
                result += `O${floor}${rooms} `
            }else{
                result += `A${floor}${rooms} `
            }
        }
        console.log(result)
    }
}
building(["6", "4"])

