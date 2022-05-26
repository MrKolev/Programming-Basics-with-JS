function vacation(input) {
    const vacationMoney = Number(input[0]);
    let money = Number(input[1]);
    let index = 2;
    let totalDay = 0;
    let daySpend = 0;
    while (money < vacationMoney) {
        let operation = input[index];
        index++;
        let dayMoney = Number(input[index])
        totalDay++;
        switch (operation){
            case "spend":
                money -= dayMoney;
                if (money <= 0){
                    money = 0;
                }            
                daySpend++;
            break;
            case "save":
                money += dayMoney;
                daySpend = 0;
                break;
        }
        if (daySpend >= 5) {
            console.log(`You can't save the money. \n ${totalDay}`);
            break;
        }
        index++;
    }
    if (money >= vacationMoney){
        console.log(`You saved the money for ${totalDay} days.`)
    }
}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])
