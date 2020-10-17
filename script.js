
let money = +prompt("Ваш доход за месяц?");
const addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую (пример: Квартплата, проездной, кредит)");
console.log(addExpenses.split(" "));
const deposit = confirm("Есть ли у вас депозит в банке?");
const expenses = prompt("Введите обязательные расходы");
const emout = +prompt("Во сколько это обойдется?");
const expenses2 = prompt("Введите обязательные расходы");
const emout2 = +prompt("Во сколько это обойдется?");
const exp = emout + emout2;
const budgetMonth = money - exp;
let mission = 4000000;
const bud = mission / budgetMonth;
console.log("Ваш буджет на месяц: ", budgetMonth);
console.log(`Вы соберете ${mission} руб через ${Math.ceil(bud)} месяцев`);

let budgetDay = budgetMonth;
console.log(Math.floor(budgetDay))

/*
 Поправить budgetDay учитывая бюджет на месяц, 
 а не месячный доход. Вывести в консоль  округлив 
 в меньшую сторону 
 */

if (budgetDay >= 1200){
    console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 600 && budgetDay <= 1200){
    console.log("У вас средний уровень дохода");
} else if (budgetDay <= 600 && budgetDay >= 0){
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay < 0){
    console.log("Что то пошло не так");
}

