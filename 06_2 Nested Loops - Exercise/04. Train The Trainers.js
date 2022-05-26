function trainTheTrainers(input) {
    let index = 0;
    const numOfJury = Number(input[index++]);
    let overallAssessment = 0;
    let counter = 0;
    while (input[index] !== "Finish") {
        let nameOfPresitation = input[index++];
        let assessmentForPresitation = 0;
        for (let i = 1; i <= numOfJury; i++){
            let evaluation = Number(input[index++]);
            overallAssessment += evaluation
            assessmentForPresitation += evaluation;
            counter++;
        }
        console.log(`${nameOfPresitation} - ${(assessmentForPresitation / numOfJury).toFixed(2)}.`)
        


    }
    console.log(`Student's final assessment is ${(overallAssessment / counter ).toFixed(2)}.`)
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
