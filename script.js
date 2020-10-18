
let money = +prompt("Ваш месячный доход", "150000" );
let income = "Фриланс";
let deposit = true;
let mission = 4000000; 

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit); 
console.log("Ваш доход за месяц: ", money); 

const expenses = prompt("Введите обязательные расходы, например (Ремонт, Дом, Рестораны)");
const emout = +prompt("Во сколько это обойдеться?", "25000");
const expenses2 = prompt("Введите обязательные расходы например (Спортзал, Кино)");
const emout2 = +prompt("Во сколько это обойдеться?", "25000");
const addExpenses = expenses + expenses2;
console.log(addExpenses.split(", "));

function getExpensesMonth(emout, emout2){
    const exp = emout + emout2;
    return exp;
}
let resultExpenses = getExpensesMonth (emout, emout2);
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
console.log(`Вы соберете ${mission} руб через ${Math.ceil(getTarget)} месяцев`);

const resultgetDay = accumulatedMonth / 30;
console.log("Бюджет на один день: ", Math.floor(resultgetDay), "руб");