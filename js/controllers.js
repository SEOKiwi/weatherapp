// CONTROLLERS
weatherApp.controller('homeController',
    ['$scope', '$location', '$cookieStore', 'cityService', 'weatherCalculations', 'weatherApi', 'geolocation',
    function($scope, $location, $cookieStore, cityService, weatherCalculations, weatherApi, geolocation) {

        $scope.weatherResult = {};
        $scope.days = 3;
        $scope.showCurrentWeather = false;
        $scope.city = cityService.city;

        $scope.$watch('city', function() {

            cityService.city = $scope.city;

        });

        $scope.submit = function () {

            $cookieStore.put('weatherAppCity', $scope.city);
            $location.url('forecast');

        }

        $scope.calc = weatherCalculations;

        // Get Client GEO Location
        $scope.coords = {};
        geolocation.getLocation().then(function(data){
            $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
            if($scope.coords) {
                $scope.weatherResult = weatherApi.getWeatherJson('', $scope.coords.lat, $scope.coords.long, $scope.days);
                $scope.showCurrentWeather = true;
            }
        });



}]);

weatherApp.controller('forecastController',
    ['$scope', '$routeParams', 'cityService', 'weatherApi', 'weatherCalculations',
    function($scope, $routeParams, cityService, weatherApi, weatherCalculations) {

        $scope.city = cityService.city;
        $scope.days = $routeParams.days;

        $scope.weatherResult = weatherApi.getWeatherJson($scope.city, '', '', $scope.days);

        $scope.calc = weatherCalculations;
        
}]);