// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$cookieStore', '$location', 'cityService', function($scope, $cookieStore, $location, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {

        cityService.city = $scope.city;

    });

    $scope.submit = function() {
        $location.path('/forecast');
    };

}]);

weatherApp.controller('forecastController',
    ['$scope', '$resource', '$routeParams', '$cookieStore', 'cityService', 'weatherService',
    function($scope, $resource, $routeParams, $cookieStore, cityService, weatherService) {

    // Declaration

    $scope.city = cityService.city;

    // Store the chosen city in Cookie to remember for reload
    $cookieStore.put('weatherAppCity', $scope.city);



    $scope.days = $routeParams.days || '2';

    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);


    // Functions

    $scope.convertToCelsius = function(degK) {

        return Math.round(degK - 273);

    }

    $scope.convertToDate = function(dt) {

        return new Date(dt * 1000);

    };

}]);