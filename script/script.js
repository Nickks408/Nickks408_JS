let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    income = 'Фриланс, банковский вклад',

    start = function(){
        do {
            money = prompt('Ваш месячный доход?');
        }
        while(!isNumber(money) || money.trim() === '' || money === null); 
    };
    start();

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 100000,
    period = 12,
    expenses = [];
    //monthIncome = +prompt('Ваш месячный доход'),

let getExpensesMonths = function(){ 
    let sum = [];
    let sumArray = 0;

    for (let i = 0; i< 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов');
        do {
        sum[i] = prompt('Во сколько это обойдется?');
        } while (!isNumber(sum[i]));  
    }
    for (let i = 0; i < sum.length; i++){         
    sumArray = sumArray + parseInt(sum[i]);
    }
    //console.log(sum);
    return (sumArray);
};

let expensesAmount = getExpensesMonths();
    

let getAccumulatedMonths = function(){
   return money - expensesAmount;
};
let accumulatedMonths = getAccumulatedMonths();


let getTargetMonth = function(){
   return mission / accumulatedMonths;
} 
let targetMonth = getTargetMonth();


let budgetDay = accumulatedMonths / 30;

console.log(typeof String(money));
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.split(', '));
console.log(expenses);
console.log ('Расходы за месяц ' + expensesAmount);

if (Math.round(targetMonth) > 0){
    console.log('Цель будет достигнута за ' + Math.round(targetMonth) + ' месяцев');
}
else{
    console.log('Цель не будет достигнута');
}

console.log('Период равен', period, 'месяцев');
console.log('Цель заработать', mission, 'рублей');
console.log('Бюджет на месяц ' + accumulatedMonths);
console.log('Бюджет на день: ' + budgetDay);

if (budgetDay >= 1200){ 
    console.log ('У вас высокий уровень дохода');
} else if(budgetDay >=600 && (budgetDay <1200)){
    console.log ('У вас средний уровень дохода');
} else if(budgetDay <600 && (budgetDay >0)){
    console.log ('К сожалению, у вас низкий уровень дохода');
}
else {
    console.log ('Что-то пошло не так!');
}
