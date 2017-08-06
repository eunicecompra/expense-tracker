'use strict';

describe('expenseDetail', function() {

    beforeEach(module('expenseDetail'));

    describe('ExpenseDetailController', function() {
        var ctrl;
        var expensesSample = [
             {
               counter: 1,
               desc: 'Lunch',
               cost: 15.00,
               category: 'FOOD'
             }, {
               counter: 2,
               desc: 'Myki Top-up',
               cost: 20.00,
               category: 'TRANSPORTATION'
             }, {
               counter: 3,
               desc: 'Weekly groceries',
               cost: 40.00,
               category: 'GROCERIES'
             }
        ];

      beforeEach(function() {
          jasmine.addCustomEqualityTester(angular.equals);
      });

       beforeEach(inject(function($componentController) {
            var ExpenseServiceMock = jasmine.createSpyObj('ExpenseService',['expenses']);
            ExpenseServiceMock.expenses = expensesSample;

            ctrl = $componentController('expenseDetail',{ExpenseService: ExpenseServiceMock});
        }));

        it('should fetch the expense details', function() {
          expect(ctrl.expenses).toEqual(expensesSample);
        });

        it('should remove the expense detail', function() {
          ctrl.removeExpense(2);
          expect(ctrl.expenses.length).toEqual(2);
        });
    });


});
