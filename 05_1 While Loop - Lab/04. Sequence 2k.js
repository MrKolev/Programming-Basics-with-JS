function sequence2k(input){
    let index = 0;
    const num = Number(input[index++]);
    let tempNums = 1;

    while (num >= tempNums){
        console.log(tempNums);
        tempNums = tempNums *2 + 1; 

    }
}
sequence2k(['3111111'])