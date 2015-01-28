// SERVICES
weatherApp.service('cityService', ['$cookieStore', function($cookieStore) {

    // Check for a cookie to recover the city
    var cookieCity = $cookieStore.get('weatherAppCity');
    this.city = cookieCity || "Auckland";
    
}]);

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

        return weatherAPI.get({ q: city, cnt: days });
    };
}]);