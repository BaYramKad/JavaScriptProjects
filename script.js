'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
     start = function() {
        do{
            money = +prompt("Ваш месячный доход?","");
        } while (!isNumber(money)); 
    };

start();


let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function() {
        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую","");
        appData.addExpenses = addExpenses.toLowerCase().split(", ");
        appData.deposit = confirm("Есть ли у вас депозит в банке?");
        //Month expenses
        for (let i = 0; i < 2; i++) {
            
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется", "");
    
            if (!isNumber(a) && (typeof(a)) != null && (typeof(b)) != null
            && a !=''  && b !='' && a.length <50 && isNumber(b)){
                appData.expenses[a] = b;
            } else{
                i = i - 1 ;
            }  
        }
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function() {
       let sum = 0;

       for (let key in appData.expenses) {
           sum+= appData.expenses[key]*1;
       }

       appData.expensesMonth = sum;
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth/30
    },
    getTargetMonth: function() {
        if ((appData.mission/appData.budgetMonth) <= 0){
            return ("Цель не будет достигнута");
        }else{
            return ("Цель будет достигнута через " + Math.ceil(appData.mission/appData.budgetMonth) + " месяц");
        }
    },
    getStatusIncome: function(){
        let data = appData.budgetDay;
        if (data >= 1200){  //9
            return ("У вас высокий уровень дохода")
        }else if (data >= 600 && data < 1200){
            return ("У вас средний уровень дохода")
        }else if (data < 600 && data >= 0){
            return ("К сожалению у вас уровень дохода ниже среднего");
        }else{    // or -> else if(budgetDay < 0) without else
            return ("Что то пошло не так")
        };
    }
};


//Variables Declaration
//Additional expenses
appData.asking();
//Month expenses
appData.getExpensesMonth();
//Month budget
appData.getBudget();

console.log("Бюджет на месяц: " + appData.budgetMonth);
console.log("Ежемесячные расходы: " + appData.expensesMonth + " руб.");
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome()); 

console.log("Наша программа включает в себя данные:");
for (let key in appData){
    console.log(key + ":" + appData[key]); 
};