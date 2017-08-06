'use strict';

angular.module('expenseInput').
    component('expenseInput', {
        templateUrl: 'expense-input/expense-input.template.html',
        controller: function ExpenseInputController(ExpenseService) {
            var self = this;
            self.categories = ['FOOD', 'TRANSPORTATION', 'GROCERIES', 'SHOPPING', 'OTHERS'];
            self.expense = {};
            self.expense.category = 'FOOD';
            self.counter = 0;

            self.addExpense = function() {
                self.counter++;
                self.expense.counter = self.counter ;
                ExpenseService.expenses.push(self.expense);
                self.expense = {};
                self.expense.category = 'FOOD';
            }

        }


    });
