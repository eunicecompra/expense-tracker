'use strict';

angular.module('expenseDetail').
    component('expenseDetail', {
        templateUrl: 'expense-detail/expense-detail.template.html',
        controller: function ExpenseDetailController(ExpenseService) {
            var self = this;
            self.expenses = ExpenseService.expenses;
            self.total = 0;

            var calculateTotalExpenses = function() {
              self.total = 0;
              for ( var i = 0; i < self.expenses.length; i++) {
                self.total = self.total + self.expenses[i].cost;
              }
            }

             self.removeExpense = function(number) {
              var index = -1;
              for ( var i = 0; i < self.expenses.length; i++) {
                if ( self.expenses[i].counter == number) {
                  index = i;
                  break;
                }
              }
              self.expenses.splice(index,1);
              calculateTotalExpenses();
            }
      }
    });
