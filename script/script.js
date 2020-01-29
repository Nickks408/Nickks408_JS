'use strict';

let money = 1000,
income = 'Фриланс, банковский вклад',
monthIncome = +prompt('Ваш месячный доход'),
addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
deposit = confirm('Есть ли у вас депозит в банке?'),
mission = 100000,
period = 12,
expences1 = prompt('Введите обязательную статью расходов'),
amount1 = +prompt('Во сколько это обойдется'),
expences2 = prompt('Введите обязательную статью расходов'),
amount2 = +prompt('Во сколько это обойдется'),
accumulatedMonth = getAccumulatedMonths(),
budgetDay = (accumulatedMonth / 30);


/*if (budgetDay >= 1200){ 
    console.log ('У вас высокий уровень дохода');
} else if(budgetDay >=600 && (budgetDay <1200)){
    console.log ('У вас средний уровень дохода');
} else if(budgetDay <600 && (budgetDay >0)){
    console.log ('К сожалению, у вас низкий уровень дохода');
}
else {
    console.log ('Что-то пошло не так!');
}*/
  

let getExpencesMonths = function(){
    return amount1 + amount2;
}

function getAccumulatedMonths (){
    return monthIncome - (amount1 + amount2);
}

function getTargetMonth (){
    return mission / accumulatedMonth;
} 
let targetMonth = getTargetMonth();


console.log(typeof money);
console.log(typeof income);
console.log(typeof String(monthIncome));
console.log(addExpences.split(', '));
console.log(typeof deposit);
console.log('Бюджет на день: ' + budgetDay);
console.log('Расходы за месяц ' + getExpencesMonths());
console.log('Цель будет достигнута за ' + Math.round(targetMonth) + ' месяцев');
//console.log('Период равен', period, 'месяцев');
//console.log('Цель заработать', mission, 'рублей');
//console.log('Бюджет на месяц ' + getAccumulatedMonths());