'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
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
    leftInputs: document.querySelectorAll('.data > div > input'),

    wer: function disableElement(el) {
        appData.leftInputs.disabled = true;
      },

    start: function(){
        
        if(salaryAmount.value === ''){
            alert('Ошибка: поле "Месячный доход" должно быть заполнено!');
            return;
        }   
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonths();
        this.getAddExpenses();
        this.getAddIncome();        
        this.getBudget();
        this.showResult();
        appData.wer();
       //additionalExpensesItem.disabled = true;
        //targetAmount.disabled = true;
        //expensesItems.disabled = true;
        //expensesTitle.disabled = true;
        //start.disabled = true;
        //cancel.disabled = false;
        
    },

    showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.ceil(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('change', this.start);
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
            this.expensesMonth += +this.expenses[key];
        }
    },

    getBudget: function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);    
        },

    getTargetMonth: function(){
        return  targetAmount.value / this.budgetMonth;
        },

    getStatusIncome: function(){
        if (this.budgetDay >= 1200){ 
            return ('У вас высокий уровень дохода');
        } else if(this.budgetDay >=600 && (appData.budgetDay <1200)){
            return ('У вас средний уровень дохода');
        } else if(this.budgetDay <600 && (appData.budgetDay >0)){
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
            return this.budgetMonth * this.period;
        },

        calcPeriod: function (){
            return this.budgetMonth * periodSelect.value;
        }, 
    };   
  
    let startFunc = appData.start.bind(appData);
    start.addEventListener('click', startFunc);
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





        

        





