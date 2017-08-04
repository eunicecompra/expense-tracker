'use strict';

angular.module('core.expense').
    factory('ExpenseService', ExpenseService);

function ExpenseService() {
    var service = {
        expenses: []
    };

    return service;
}
