function numberPyramid(input) {
    const n = Number(input[0]);
    let curNum = 0;
    let flags = false;
    for (let rows = 1; rows <= n; rows++) {
        let printLine = ``
        for (let cols = 1; cols <= rows; cols++) {
            curNum++
            printLine += curNum + " ";
            if (curNum === n) {
                flags = true;
                break;
            }
        }
        console.log(printLine);
        if (flags) {
            break;
        }
    }

}
numberPyramid([`10`])