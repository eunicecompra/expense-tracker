'use strict';

// Define the `dateFormat` module
var dateFormat = angular.module('core.dateFormat',['core.expense']);

dateFormat.controller('DateFormatController', function DateFormatController($scope, ExpenseDateService) {
    var d_names = ["Sunday","Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
    var m_names = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];

    var expenseDate = ExpenseDateService.getExpenseDate();
    if ( expenseDate == null || !(expenseDate instanceof Date) ) {
       expenseDate = new Date();
    }

    var day = expenseDate.getDate();
    var monthIndex = expenseDate.getMonth();
    var year = expenseDate.getFullYear();
    var dayOfTheWeek = expenseDate.getDay();

    $scope.dateDisplay = d_names[dayOfTheWeek] + ", " + day + " " + m_names[monthIndex] + " " + year;
});