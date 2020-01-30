'use strict';

let money,
income = 'Фриланс, банковский вклад',
//monthIncome = +prompt('Ваш месячный доход'),
start = function(){
    do {
        money = prompt('Ваш месячный доход?');
    }
    while(isNaN(money) || money.trim() === '' || money === null); 
}
start();
let addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
deposit = confirm('Есть ли у вас депозит в банке?'),
mission = 100000,
period = 12,
expences1,
//amount1 = +prompt('Во сколько это обойдется'),
expences2,
//amount2 = +prompt('Во сколько это обойдется'),
accumulatedMonth = getAccumulatedMonths(),
//budgetDay = (accumulatedMonth / 30);


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
  


getExpencesMonths = function(){ 
    let sum = 0;

    

        for (let i = 0; i < 2; i++){
            if (i === 0){
                expences1 = prompt('Введите обязательную статью расходов', "a");
            } else if (i === 1){
                expences2 = prompt('Введите обязательную статью расходов', "b");
            }
           
            sum += +prompt('Во сколько это обойдется?');
            
            
        }
        console.log(sum);
        return sum;    
    
    
}

let expencesAmount = getExpencesMonths();
console.log ('Расходы за месяц ' + expencesAmount);


//function getAccumulatedMonths (){
   //return money - (amount1 + amount2);
//}

//function getTargetMonth (){
   //return mission / accumulatedMonth;
//} 
//let targetMonth = getTargetMonth();


console.log(typeof income);
console.log(typeof String(money));
console.log(addExpences.split(', '));
console.log(typeof deposit);
//console.log('Бюджет на день: ' + budgetDay);

//console.log('Цель будет достигнута за ' + Math.round(targetMonth) + ' месяцев');
//console.log('Период равен', period, 'месяцев');
//console.log('Цель заработать', mission, 'рублей');
//console.log('Бюджет на месяц ' + getAccumulatedMonths());