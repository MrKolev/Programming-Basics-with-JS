function graduation(input) {
    let index = 0;
    const name = input[index++];
    let i = 1 ;
    let sumGrade = 0;
    let fall = 0;
    let expelled = false;
    while (i <= 12) {
        let grade = Number(input[index++]);
        if (grade < 4) {
            fall++;
            if (fall > 1) {
                expelled = true;
                break;
            }
            continue;
        }
        sumGrade += grade;
        i++;
    }
    if (expelled) {
        console.log(`${name} has been excluded at ${i} grade`)
    }else {
        let average =  sumGrade / 12
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
    }
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"3",
"3.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
