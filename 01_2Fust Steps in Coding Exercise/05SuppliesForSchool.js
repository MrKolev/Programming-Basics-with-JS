function suppliesForSchool(input) {



    const mouny = (Number(input[0]) * 5.80) + (Number(input[1]) * 7.20) + (Number(input[2]) * 1.20);
    const percentage = mouny - ((Number(input[3]) / 100) * mouny);


    console.log(percentage);
}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "])

    // const countPackages = Number(input[0]) * 5.80;
    // const countMarkers = Number(input[1]) * 7.20;
    // const litresPreparation = Number(input[2]) * 1.20;
    // const totalMouny = mouny - percentage;