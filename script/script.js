let money = 1000;
console.log(typeof money);

let income = 'Фриланс, банковский вклад';
console.log(typeof income);

let monthIncome = +prompt('Ваш месячный доход');
console.log(typeof String(monthIncome));

let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpences.split(', '));

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(typeof deposit);

let mission = 100000;

let period = 12;
//console.log('Период равен', period, 'месяцев');
//console.log('Цель заработать', mission, 'рублей');


let expences1 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется');
let expences2 = prompt('Введите обязательную статью расходов');
let amount2 = +prompt('Во сколько это обойдется');

let accumulatedMonth = getAccumulatedMonths();

let budgetDay = (accumulatedMonth / 30);
console.log('Бюджет на день: ' + budgetDay);

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
console.log('Расходы за месяц ' + getExpencesMonths());

function getAccumulatedMonths (){
    return monthIncome - (amount1 + amount2);
}
//console.log('Бюджет на месяц ' + getAccumulatedMonths());


function getTargetMonth (){
    return mission / accumulatedMonth;
} 
let targetMonth = getTargetMonth();
console.log('Цель будет достигнута за ' + Math.round(targetMonth) + ' месяцев');




