function examPreparation(input) {
    const maxOfBadGrades = Number(input[0]);
    let numOfBadGrades = 0;
    let grades = 0;
    let numberOfProblems = 0;
    let sumGrade = 0;
    index = 1;
    let problem = input[index];
    while (problem !== "Enough") {
        index++;
        grades = Number(input[index]);
        if (grades <= 4) {
            numOfBadGrades++;
        }
        if (numOfBadGrades >= maxOfBadGrades) {
            console.log(`You need a break, ${numOfBadGrades} poor grades.`);
            break;
        }
        sumGrade += grades;
        index++;
        problem = input[index];
        numberOfProblems++;
    }
    if (problem === "Enough") {
        let averageScore = sumGrade / numberOfProblems;
        index -= 2;
        problem = input[index];
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${problem}`)
    }
}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
