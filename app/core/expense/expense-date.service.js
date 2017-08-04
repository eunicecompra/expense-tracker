'use strict';

angular.module('core.expense').
    factory('ExpenseDateService', ExpenseDateService);

function ExpenseDateService() {
    var expenseDate = "";

    return {
        setExpenseDate: function(expenseDateParam) {
            expenseDate = expenseDateParam;
        },
        getExpenseDate: function() {
            return expenseDate;
        }
    }
}