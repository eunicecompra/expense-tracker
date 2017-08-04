'use strict';

angular.module('expenseDetail').
    component('expenseDetail', {
        templateUrl: 'expense-detail/expense-detail.template.html',
        controller: function ExpenseDetailController(ExpenseService) {
            this.expenses = ExpenseService.expenses;
            this.total = 0.00;
        }
    });