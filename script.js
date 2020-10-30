'use strict';
let incomeTitle = document.querySelector(".income-title"),
    incomeAmout = document.querySelector(".income-amount"),
    expensesTitle = document.querySelector(".expenses-title"),
    expensesItems = document.querySelectorAll(".expenses-items"),
    incomeItems = document.querySelectorAll(".income-items"),
    addExpItem = document.querySelector(".additional_expenses-item"),
    targetAmout = document.querySelector(".target-amount"),
    checkbox = document.querySelector(".deposit-checkmark"),
    income = document.querySelector(".income"),
    expenses = document.querySelector(".expenses"),
    additionalIncomeItem = document.querySelectorAll(".additional_income-item"),
    salaryAmount = document.querySelector(".salary-amount"),
    incomeBtnPlus = income.getElementsByTagName("button")[0],
    expensesBtnPlus = expenses.getElementsByTagName("button")[0],
    budGetDay = document.getElementsByClassName("budget_day-value")[0],
    expensesMonth = document.getElementsByClassName("expenses_month-value")[0],
    additionalIncomeValue = document.getElementsByClassName("additional_income-value")[0],
    addExpensesValue = document.getElementsByClassName("additional_expenses-value")[0],
    incomePeriod = document.getElementsByClassName("income_period-value")[0],
    targetMonth = document.getElementsByClassName("target_month-value")[0],
    periodSelect = document.getElementsByClassName("period-select")[0],
    budgetMunth = document.querySelector(".budget_month-value"),
    periodAmount = document.querySelector(".period-amount"),
    buttonStart = document.getElementById("start");

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 0,
    start: function() {
        appData.budget = salaryAmount.value;
        appData.getAddIncome();
        appData.getAddExpenses();
        appData.getexpenses();
        appData.getExpensesMonth();
        appData.getInfoDeposit();
        appData.getBudget();
        appData.getIncome();
        appData.showResult();
    },
    addExpensesBlock: function(){
        let cloneExpenses = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpenses, expensesBtnPlus);
        expensesItems = document.querySelectorAll(".expenses-items");
        if (expensesItems.length === 3){
            expensesBtnPlus.style.display = "none";
            
        }
    },
    getexpenses: function(){
        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector(".expenses-title").value;
            let cashExpenses = item.querySelector(".expenses-amount").value;
            if(itemExpenses !== "" && cashExpenses !== ""){
                appData.expenses[itemExpenses] = +cashExpenses;
            }
        });
    },
    addIncomeBlock: function(){
        let cloneIncome = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncome, incomeBtnPlus);
        incomeItems = document.querySelectorAll(".income-items");
        if(incomeItems.length === 3){
            incomeBtnPlus.style.display = "none";
        }
    },
    getIncome: function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector(".income-title").value;
            let cashIncome = item.querySelector(".income-amount").value;
            if(itemIncome !== "" && cashIncome !== ""){
                appData.income[itemIncome] = +cashIncome;
            }
        });
    },
    showResult: function(){
        budgetMunth.value = appData.budget;
        expensesMonth.value = appData.expensesMonth;
        budGetDay.value = Math.ceil(appData.budgetDay);
        addExpensesValue.value = appData.addExpenses.join(", ");
        additionalIncomeValue.value = appData.addIncome.join(", ");
        targetMonth.value = Math.ceil(appData.getTargetMonth());
        incomePeriod.value = appData.budgetMonth;
        periodSelect.addEventListener("input", function(){
            let resultAmount = appData.budgetMonth * periodAmount.value;
            return incomePeriod.value = resultAmount;
        });
    },
    getAddExpenses: function(){
        let addExpenses = addExpItem.value.split(", ");
        addExpenses.forEach(function(item){
            item = item.replace(/[^,a-zА-Яа-яA-Z]+/g, "");
            if(item !== ""){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ""){
                appData.addIncome.push(itemValue);
            }
        });
    },
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function() {
        let sum = 0;
        for (let key in appData.expenses) {
           sum+= +appData.expenses[key]*1;
        }
        appData.expensesMonth = sum;
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },
    getTargetMonth: function() {
        return targetAmout.value/appData.budgetMonth;
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
        let value = periodSelect.value;
        periodAmount.textContent = +value;
        periodAmount.value = periodSelect.value;
        const resultAmount = appData.budgetMonth * periodAmount.value;
        return resultAmount;

    }
};
console.log(appData);


salaryAmount.addEventListener("input", function() {
    if (salaryAmount.value === "") {
        buttonStart.disabled = true;
    }else {
        buttonStart.disabled = false;
    }
});
buttonStart.addEventListener("click", appData.start);
expensesBtnPlus.addEventListener("click", appData.addExpensesBlock);
incomeBtnPlus.addEventListener("click", appData.addIncomeBlock);
periodSelect.addEventListener("input", appData.calcSavedMoney);