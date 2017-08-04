'use strict';

describe('expenseInput', function() {

    var ctrl;
    var ExpenseServiceMock;

    beforeEach(module('expenseInput'));

    describe('ExpenseInputController', function() {

       beforeEach(inject(function($componentController) {
            ExpenseServiceMock = jasmine.createSpyObj('ExpenseService',['expenses']);
            ExpenseServiceMock.expenses = [];

            ctrl = $componentController('expenseInput',{ExpenseService: ExpenseServiceMock});
        }));

        it('It should add an expense successfully.', function() {
            jasmine.addCustomEqualityTester(angular.equals);

            ctrl.expense.category = 'FOOD';
            ctrl.expense.desc = 'Croissant';
            ctrl.expense.cost = 3.50;
            ctrl.addExpense();

            expect(ExpenseServiceMock.expenses.length).toEqual(1);

        });

    });


});