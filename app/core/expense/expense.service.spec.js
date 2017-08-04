'use strict';

describe('ExpenseService', function() {

    var expensesSample = [
         {
           desc: 'Lunch',
           cost: 15.00,
           category: 'FOOD'
         }, {
           desc: 'Myki Top-up',
           cost: 20.00,
           category: 'TRANSPORTATION'
         }, {
           desc: 'Weekly groceries',
           cost: 40.00,
           category: 'GROCERIES'
         }
    ];

    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(module('core.expense'));

    beforeEach(inject (function() {
        ExpenseService = jasmine.createSpyObj('ExpenseService',['expenses']);
        ExpenseService.expenses = expensesSample;
    }));

    it('is defined', inject(function(ExpenseService) {
      expect(ExpenseService).toBeDefined();
     }));

    it ( "It should return an array of expenses" ,
        function() {
            var expenses = ExpenseService.expenses;
            expect(expenses).toEqual(expensesSample);
        }
    );

});