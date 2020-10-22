let money,
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
    income = "Фриланс",
    deposit = true,
    mission = 4000000;

const isNumber = function(n){
    return  !isNaN(parseFloat(n)) && isFinite(n);
}

const start = function(){
    do {
        money = prompt("Ваш доход за месяц");
    } while(!isNumber(money));
}
start();

const showTypeOf = function(typeData){
    console.log(typeof typeData);
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(", "));
console.log("Ваш доход за месяц: ", money);

let expenses = [];
function getExpensesMonth(){
    let sum = 0;
    let result = 0;
    for (let i = 0; i < 2; i++){
        expenses[i] = prompt("Введите обязательную статью расхода, например (Квартплата)");    
        do{
            sum = +prompt("Во сколько это обойдется ?");
        }
        while(!isNumber(sum));
        result += +sum;
    }
    console.log(expenses);
    return result;
}

let resultExpenses = getExpensesMonth();
console.log("Расходы за месяц: ", resultExpenses);

function getAccumulatedMonth(income, costs){
    const result = income - costs;
    return result;
}
let accumulatedMonth = getAccumulatedMonth(money, resultExpenses);
console.log("Ваш бюджет на месяц: ", accumulatedMonth);

function getTargetMonth(mission, income){
    const resultTarget = mission / income;
    return resultTarget;
}

let getTarget = getTargetMonth(mission, accumulatedMonth);

function getResultMonth(n){
    if (n < 0){
        return "Цель не будет достигнута";
    } else{
        return `Цель ${mission} руб будет достигнута через ${Math.ceil(getTarget)} месяцев`;
    }
}
console.log(getResultMonth(getTarget));

const resultgetDay = accumulatedMonth / 30;
console.log("Бюджет на один день: ", Math.floor(resultgetDay), "руб");


const getStatusIncome = function(){

    if (accumulatedMonth >= 1200){
        return "У вас высокий уровень дохода";
    } else if (accumulatedMonth >= 600 && accumulatedMonth <= 1200){
        return "У вас средний уровень дохода";
    } else if (accumulatedMonth <= 600 && accumulatedMonth >= 0){
        return "К сожалению у вас уровень дохода ниже среднего";
    } else if (accumulatedMonth < 0){
        return "Что то пошло не так";
    }

}
console.log(getStatusIncome());