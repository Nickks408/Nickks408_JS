'use strict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),    
    incomeItems = document.querySelectorAll('.income-items'),
    isNumber = function(n){
        return !isNaN(parseFloat(n)) && isFinite(n)
        },
    rangeValue = function(){
            
            let periodAmount = document.getElementById('title period-amount');
            periodAmount.innerHTML = periodSelect.value;
            console.log(periodSelect.value);
        
        },    
appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    incomeMonth: 0,
    period: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,

    start: function(){
        if(salaryAmount.value === ''){
            alert('Ошибка: поле "Месячный доход" должно быть заполнено!');
            return;
        }   
        appData.budget = +salaryAmount.value;
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonths();
        appData.getAddExpenses();
        appData.getAddIncome();        
        appData.getBudget();
        appData.showResult();
    },

    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = Math.ceil(appData.budgetDay);
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
        periodSelect.addEventListener('change', appData.start);
    },

    addIncomeBlock: function(){
        console.log(incomeItems.parentNode);
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        if(incomeItems.length === 2){
            incomePlus.style.display = 'none';
        }
    },


    addExpensesBlock: function(){
        console.log(expensesItems.parentNode);
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        if(expensesItems.length === 2){
            expensesPlus.style.display = 'none';
        }
    },

    
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },

    getIncome: function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                appData.expenses[itemIncome] = cashIncome;
            }
        });
    },
       /*if(confirm('Есть ли у вас дополнительный заработок?')){
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
        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }*/   
    

    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },

    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        })
    },
    
    getExpensesMonths: function(){
        for (let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];
        }
    },

    getBudget: function(){
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);    
        },

    getTargetMonth: function(){
        return  targetAmount.value / appData.budgetMonth;
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
            /*appData.deposit = confirm('Есть ли у вас депозит в банке?');
            if(appData.deposit){
                
                do{
                    appData.percentDeposit = prompt('Какой годовой процент у депозита?', '10');
                }
                while(!isNumber(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
                do{
                    appData.moneyDeposit = prompt('Какая сумма положена на депозит?', 10000);
                }
                while(!isNumber(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
            }*/
        },

        calcSavedMoney: function(){
            return appData.budgetMonth * appData.period;
        },

        calcPeriod: function (){
            return appData.budgetMonth * periodSelect.value;
        }, 
    };   
  
    start.addEventListener('click', appData.start);
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);
      

if (appData.getTargetMonth() > 0){
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяцев');
}
else{
    console.log('Цель не будет достигнута');
}


for (let key in appData){    
    console.log(key + ': ' + appData[key]);
} 

appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());




        





