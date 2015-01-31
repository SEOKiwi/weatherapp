// DIRECTIVES

weatherApp.directive('selectInputValue', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            $timeout(function () {
                //element[0].focus();
                //element[0].select();
            }, 0);
        }
    }
}]);

weatherApp.directive('weatherPanel', [function() {
    return {
        restrict: 'EA',
        templateUrl: 'directives/weather-panel.html',
        scope: {
            weather: '=',
            calculateDate: '&',
            calculateTemperature: '&'
        }
    };
}]);