// "use strict";
const isNumber = function(n){
    return  !isNaN(parseFloat(n)) && isFinite(n);
}
let money;
   
const start = function(){
        do {
            money = 45000;
        } while(!isNumber(money));
    }


let appData = {
    budget: start(),
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 4000000,
    period: 0,
    asking: function(){
                let addExpenses = "Машина, Спортзал, Рестораны";
                appData.addExpenses = console.log(addExpenses.toLowerCase().split(", "));
                appData.deposit = true;
                appData.expenses = function(){
                    let sum = 0,
                        exp;
                    for (let i = 0; i < 2; i++){
                        do {
                            exp = prompt(" Введите обязательные расходы");
                            console.log("exp ", exp);
                        }
                        while(typeof exp !== "string");
                        do{
                            sum = +prompt("Во сколько это обойдется ?");
                            console.log("sum ", sum);
                        }
                        while(!isNumber(sum));
                        appData.expenses[exp] = sum;
                }
            };
        appData.expenses();
    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function(){
        for(let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key] ;
        }
    },
    getTargetMonth: function() {
        if ((appData.mission/appData.budgetMonth) <= 0){
            return ("Цель не будет достигнута");
        }else{
            return ("Цель будет достигнута через " + Math.ceil(appData.mission/appData.budgetMonth) + " месяц");
        }
    },
    getBudget: function(){
        appData.budgetMonth = money - appData.expensesMonth;
        console.log("hello hi");
    },
    getStatusIncome: function(){
        if (appData.budgetMonth >= 1200){
            return "У вас высокий уровень дохода";
        } else if (appData.budgetMonth >= 600 && appData.budgetMonth <= 1200){
            return "У вас средний уровень дохода";
        } else if (appData.budgetMonth <= 600 && appData.budgetMonth >= 0){
            return "К сожалению у вас уровень дохода ниже среднего";
        } else if (appData.budgetMonth < 0){
            return "Что то пошло не так";
        }
    }
};
console.log("Ваш доход за месяц: ", money);


appData.asking();
console.log(appData);
console.log(appData.getTargetMonth(appData.period));
appData.getExpensesMonth();
appData.getBudget();
appData.getStatusIncome();


console.log("Расходы за месяц: ", appData.expensesMonth);
console.log("Ваш бюджет на месяц: ", appData.budgetMonth);
appData.budgetDay = appData.budgetMonth / 30;

console.log("Бюджет на один день: ", Math.floor(appData.budgetDay), " руб");

console.log(appData.getStatusIncome());