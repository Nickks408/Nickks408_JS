'use strict';

let money,

    isNumber = function(n){
        return !isNaN(parseFloat(n)) && isFinite(n)
        },
    
    start = function(){
        do {
            money = prompt('Ваш месячный доход?', 10000);
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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 100000,
    period: 12,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
   
    asking: function(){

        if(confirm('Есть ли у вас дополнительный заработок?')){

            let itemIncome;
            do{
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            }
            while (isNumber(itemIncome) || itemIncome === '' || itemIncome === null); 

            let cashIncome;
            do{
                cashIncome = prompt('Сколько в месяц вы зарабатываете на этом?', 10000);
            }
            while (!isNumber(cashIncome) || cashIncome === '' || cashIncome === null);
            
            appData.income[itemIncome] = cashIncome;        
        }


        let addExpenses;
        do{
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'кино, бары');
        }
        while (isNumber(addExpenses) || addExpenses === '' || addExpenses === null);
        
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            console.log(appData.addExpenses.join(', '));
            

            for (let i = 0; i< 2; i++) {
                let itemExpenses = prompt('Введите обязательную статью расходов', 'бензин');
                let cashExpenses;
                do {
                cashExpenses = prompt('Во сколько это обойдется?', 2500);      
            }
            while (!isNumber(cashExpenses) || cashExpenses === '' || cashExpenses === null);

            appData.expenses[itemExpenses] = cashExpenses;
            }   
        },

    getExpensesMonths: function(){
        for (let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];
        }
    },

    getBudget: function(){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);    
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
        },

        getInfoDeposit: function(){
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            if(appData.deposit){
                
                do{
                    appData.percentDeposit = prompt('Какой годовой процент у депозита?', '10');
                }
                while(!isNumber(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
                do{
                    appData.moneyDeposit = prompt('Какая сумма положена на депозит?', 10000);
                }
                while(!isNumber(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
            }
        },

        calcSavedMoney: function(){
            return appData.budgetMonth * appData.period;
        }
    };   
  
    appData.asking();
    appData.getExpensesMonths();
    appData.getBudget();
    


console.log ('Расходы за месяц ' + appData.expensesMonth);

if (appData.getTargetMonth() > 0){
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяцев');
}
else{
    console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());
console.log('Наша программа включает в себя данные:');

for (let key in appData){
    
    console.log(key + ': ' + appData[key]);
} 

appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());



let buttonStart = document.getElementById('start');
console.log(buttonStart);

let buttonIncomeAdd = document.getElementsByTagName('button');
console.log(buttonIncomeAdd[0]);

let buttonExpensesAdd = document.getElementsByTagName('button');
console.log(buttonExpensesAdd[1]);

let depositCheck = document.querySelector('#deposit-check');
console.log(depositCheck);

let additionalncomeItem = document.querySelectorAll('.additional_income-item');
console.log(additionalncomeItem);

let result = document.querySelectorAll('.result > div > input');
console.log(result);

let data = document.querySelectorAll('.data > div > input');
console.log(data);





