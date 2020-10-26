

const isNumber = function(n){
    return  !isNaN(parseFloat(n)) && isFinite(n);
}
let money;
function start(){
        do {
            money = +prompt("Ваш ежемесячный доход?");
        } while(!isNumber(money));
    }
start();

let appData = {
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: confirm("У вас есть депозит в банке?"),
    mission: 4000000,
    period: 0,
    asking: function(){
                let addExpenses = prompt("Введите предпочитаемы расходы через запятую");
                appData.deposit = true;
                appData.expenses = function(){
                    let sum = 0,
                        exp;
                    for (let i = 0; i < 2; i++){
                        do {
                            exp = prompt(" Введите обязательные расходы");
                        }
                        while(typeof exp !== "string");
                        do{
                            sum = +prompt("Во сколько это обойдется ?");
                        }
                        while(!isNumber(sum));
                        appData.expenses[exp] = sum;
                }
            };
    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function(){
        for(let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getTargetMonth: function() {
        if ((appData.mission/appData.budgetMonth) <= 0){
            return ("Цель не будет достигнута");
        } else{
            return (`Цель ${appData.mission} будет достигнута через ${Math.ceil(appData.mission/appData.budgetMonth)} месяцев`);
        }
    },
    getBudget: function(){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
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
appData.asking();
appData.expenses();
console.log("Ваш доход за месяц: ", appData.budget);
appData.getExpensesMonth();
appData.getBudget();

console.log("Расходы за месяц: ", appData.expensesMonth, " руб");
// console.log("Ваш бюджет на месяц: ", appData.budgetMonth, " руб");
// console.log("Бюджет на один день: ", Math.floor(appData.budgetDay), " руб");
console.log(appData.getTargetMonth());
// console.log(appData.getStatusIncome());

console.log("Наша программа включает в себя данные:");
for (let key in appData){
    console.log ("Свойство: ", key, "|", "Значение: ", appData[key]); 
};

