function fishTank(input){

    const length = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const obem = (length * height * width) / 1000;
    const percents = (Number(input[3])) / 100;
    const total =obem * (1- percents);
    

    console.log(total);

}
fishTank(["85 ","75 ","47 ",`17` ])