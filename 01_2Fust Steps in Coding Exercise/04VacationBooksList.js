function vacationBooks(input) {
    const totalpages = Number(input[0]);
    const pagesForHour = Number(input[1]);
    const days = Number(input[2]);
    const totalTime = totalpages / pagesForHour;
    const results = totalTime / days;

    console.log(results);


}

vacationBooks(["212 ", "20", "2"])
vacationBooks(["432 ","15 ","4 "])
