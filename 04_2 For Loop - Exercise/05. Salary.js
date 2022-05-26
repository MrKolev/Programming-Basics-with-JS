function salary(input) {
    const facebook = 150;
    const instagram = 100;
    const reddit = 50;
    let index = 0;
    const openTabs = Number(input[index++]);
    const salary = Number(input[index++]);
    let finslSalary = salary
    for (i = 0; i <= openTabs; i++) {
        switch (input[index++]) {
            
            case "Facebook":
                finslSalary -= facebook; break;
            case "Instagram":
                finslSalary -= instagram; break;
            case "Reddit":
                finslSalary -= reddit; break;
        }
    }
    if (finslSalary <= 0) {
        console.log("You have lost your salary.")
    }else{
        console.log(finslSalary)
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])

