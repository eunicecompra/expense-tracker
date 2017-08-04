'use strict';

describe('DateFormatController', function(){

    var ctrl, $scope;

    beforeEach(module('core.dateFormat'));

    beforeEach(inject(function($rootScope, $controller) {
        var ExpenseDateServiceMock = {
          getExpenseDate: function() {}
        };

        spyOn(ExpenseDateServiceMock, 'getExpenseDate').and.returnValue(new Date("May 3, 2017 11:00:00"));

        $scope = $rootScope.$new();

        ctrl = $controller('DateFormatController', {$scope: $scope , ExpenseDateService: ExpenseDateServiceMock });
    }));

    it('it should display the date in format <day of the week>, dd MMM yyyy',
        function(){
            expect($scope.dateDisplay).toBe('Wednesday, 3 May 2017');
        }
    );
});