let money = +prompt("Ваш доход за месяц?", "75000"),
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
    income = "Фриланс",
    deposit = true,
    mission = 4000000;

const showTypeOf = function(typeData){
    console.log(typeof typeData);
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.split(", "));
console.log("Ваш доход за месяц: ", money); 
const expenses = prompt("Введите обязательные расходы, например (Ремонт, Дом, Рестораны)");
const emout = +prompt("Во сколько это обойдется?", "43000");
const expenses2 = prompt("Введите обязательные расходы например (Спортзал, Кино)");
const emout2 = +prompt("Во сколько это бойдется?", "2500");
const sumExpenses = expenses + expenses2;
console.log(sumExpenses.split(", "));

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
