'use strict';

angular.module('expenseInput').
    component('expenseInput', {
        templateUrl: 'expense-input/expense-input.template.html',
        controller: function ExpenseInputController(ExpenseService) {
            var self = this;
            self.categories = ['FOOD', 'TRANSPORTATION', 'GROCERIES', 'SHOPPING', 'OTHERS'];
            self.expense = {};

            self.addExpense = function() {
                ExpenseService.expenses.push(self.expense);
                self.expense = {};
            }

        }


    });