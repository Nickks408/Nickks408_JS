'use strict';

let money,

isNumber = function(n){
        return !isNaN(parseFloat(n)) && isFinite(n)
        },
    
start = function(){
        do {
            money = prompt('Ваш месячный доход?');
        }
        while(!isNumber(money) || money.trim() === '' || money === null); 
    };
    start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 100000,
    period: 12,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,

    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
    },

    getExpensesMonths: function()
            {
                let sum = [];
                let sumArray = 0;
        
                for (let i = 0; i< 2; i++) {
                    appData.expenses[i] = prompt('Введите обязательную статью расходов');
                    do {
                    sum[i] = prompt('Во сколько это обойдется?'); 
                    } while (!isNumber(sum[i]));  
                }
        
                for (let i = 0; i < sum.length; i++){         
                    sumArray = sumArray + parseInt(sum[i]);
                }

                return appData.expensesMonth = sumArray;
                },
    
    getBudget: function(){
        appData.budgetMonth = money - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
        return appData.budgetMonth, appData.budgetDay;
        },

    getTargetMonth: function(){
        return appData.mission / appData.budgetMonth;
        },

    getStatusIncome: function(){
        if (appData.budgetDay >= 1200){ 
            return ('У вас высокий уровень дохода');
        } else if(appData.budgetDay >=600 && (appData.budgetDay <1200)){
            return ('У вас средний уровень дохода');
        } else if(appData.budgetDay <600 && (appData.budgetDay >0)){
            return ('К сожалению, у вас низкий уровень дохода');
        }
        else {
            return ('Что-то пошло не так!');
            }
        }
    };   
  
let askingExpensesDeposit = appData.asking(),
    expensesAmount = appData.getExpensesMonths(),
    accumulatedMonths = appData.getBudget(),
    targetMonth = appData.getTargetMonth();


console.log ('Расходы за месяц ' + expensesAmount);

if (Math.round(targetMonth) > 0){
    console.log('Цель будет достигнута за ' + Math.round(targetMonth) + ' месяцев');
}
else{
    console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());
console.log('Наша программа включает в себя данные:');
for (let key in appData){
    
    console.log(key + ': ' + appData[key]);
} 