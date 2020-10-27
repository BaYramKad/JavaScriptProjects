'use strict';
const income = document.querySelector(".income");
const incomeTitle = document.querySelector(".income-title");
const incomeAmout = document.querySelector(".income-amout");
const expenses = document.querySelector(".expenses");
const expensesTitle = document.querySelector(".expenses-title");
const expensesAmout = document.querySelector(".expenses-amout");
const addExpItem = document.querySelector(".additional_expenses-item");
const targetAmout = document.querySelector(".target-amount");
const checkbox = document.querySelector(".deposit-checkmark");

const incomeItem = document.querySelectorAll(".additional_income-item");
const salaryAmout = document.querySelectorAll(".salary-amount");

const buttonStart = document.getElementById("start");
const incomeBtnPlus = income.getElementsByTagName("button");
const expensesBtnPlus = expenses.getElementsByTagName("button");

const budGetDay = document.getElementsByClassName("budget_day-value");
const expensesMonth = document.getElementsByClassName("expenses_month-value");
const addIncome = document.getElementsByClassName("additional_income-value");
const addExpenses = document.getElementsByClassName("additional_expenses-value");
const incomePeriod = document.getElementsByClassName("income_period-value");
const targetMonth = document.getElementsByClassName("target_month-value");
const periodSelect = document.getElementsByClassName("period-select");


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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    asking: function() {

        if (confirm("Есть ли у вас дополнительный заработок?")){
            let itemIncome;
            let cachIncome;
            do{
                itemIncome = prompt("Какой у вас есть дополнительный заработок?");
            } while(itemIncome.trim() === "" || itemIncome === null || Number(itemIncome));
            do{
                cachIncome = prompt("Сколько в месяц зарабатываете на этом?", 10000);
            }
            while(!isNumber(cachIncome));
            appData.income[itemIncome] = cachIncome;
        }
        
        function string() {
            let addExpenses = prompt("Перечислите возможноные расходы через запятую");
            let splits = addExpenses.split(" ");
            var stringItog = "";
          
            for (let i = 0; i < splits.length; i++) {
              let Name = splits[i];
              let First = Name.substring(0, 1).toUpperCase();
              let Leftovers = Name.substring(1, Name.length)
              stringItog += First + Leftovers + " ";
            }
            console.log(stringItog)
          }
        string();

        appData.deposit = confirm("Есть ли у вас депозит в банке?");
        for (let i = 0; i < 2; i++) {
            let exp,
                sum;
            do{
                exp = prompt("Введите обязательную статью расходов в этом месяце");
            }
            while(exp.trim() === "" || exp === null || Number(exp));
            do{
                sum = prompt("Во сколько обойдется");
            }
            while(!isNumber(sum));
            appData.expenses[exp] = sum;

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
        appData.budgetDay = appData.budgetMonth/30;
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
    },
    getInfoDeposit: function(){
        let percDeposit,
            sumDeposit;
        if (appData.deposit){
            do{
                percDeposit = prompt("Какой годовой процент?", 10);
            }
            while(!isNumber(percDeposit));
            do{
                sumDeposit = prompt("Какая сумма заложена?", 10000);
            }
            while(!isNumber(sumDeposit));
            appData.percentDeposit = percDeposit;
            appData.moneyDeposit = sumDeposit;
        }
    },
    calcSavedMoney: function(){
        return appData.expensesMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getInfoDeposit();
appData.getBudget();
console.log("Бюджет на месяц: " + appData.budgetMonth);
console.log("Ежемесячные расходы: " + appData.expensesMonth + " руб.");
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome()); 

console.log("Наша программа включает в себя данные:");
for (let key in appData){
    console.log(key + ":" + appData[key]); 
};