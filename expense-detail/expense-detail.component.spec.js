'use strict';

describe('expenseDetail', function() {

    beforeEach(module('expenseDetail'));

    describe('ExpenseDetailController', function() {
        var ctrl;
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

       beforeEach(inject(function($componentController) {
            var ExpenseServiceMock = jasmine.createSpyObj('ExpenseService',['expenses']);
            ExpenseServiceMock.expenses = expensesSample;

            ctrl = $componentController('expenseDetail',{ExpenseService: ExpenseServiceMock});
        }));

        it('should fetch the expense details', function() {
          jasmine.addCustomEqualityTester(angular.equals);
          expect(ctrl.expenses).toEqual(expensesSample);
        });
    });


});