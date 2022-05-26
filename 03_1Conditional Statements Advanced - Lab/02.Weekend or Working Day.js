function weekendOrWorkingDay(input) {
  let day = input[0];
  switch (day.toLowerCase()) {
    case "monday": console.log("Working day"); break;
    case "tuesday": console.log("Working day"); break;
    case "wednesday": console.log("Working day"); break;
    case "thursday": console.log("Working day"); break;
    case "friday": console.log("Working day"); break;
    case "saturday": console.log("Weekend"); break;
    case "sunday": console.log("Weekend"); break;
    default: console.log("Error"); break;
  }
}
 weekendOrWorkingDay(["Mosnday"])