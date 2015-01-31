// SERVICES

// Service that holds/shares the city value between the controllers
weatherApp.service('cityService', ['$cookieStore', function($cookieStore) {

    $cookieCity = $cookieStore.get('weatherAppCity');
    this.city = $cookieCity || '';

}]);

weatherApp.service('weatherApi', [ '$resource', function($resource) {

    this.getWeatherJson = function(city, lat, lon, days) {

        var weatherApi = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' } });

        if (city) {
            var weatherResult = weatherApi.get({q: city, cnt: days});
        } else {
            var weatherResult = weatherApi.get({lat: lat, lon: lon, cnt: days});
            console.log(weatherResult);
        }

        return weatherResult;

        //return {"cod":"200","message":0.0267,"city":{"id":"2858729","name":"Oberviechtach","coord":{"lon":12.4181,"lat":49.4578},"country":"Germany","population":0},"cnt":1,"list":[{"dt":1422529200,"temp":{"day":274.41,"min":272.49,"max":274.41,"night":272.49,"eve":274.01,"morn":274.41},"pressure":950.35,"humidity":92,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"speed":6.71,"deg":226,"clouds":92,"rain":0.5,"snow":3}]};
    };

}]);

weatherApp.service('weatherCalculations', [function() {
    this.calculateTemperature = function (kelvins) {
        return Math.round(kelvins - 273);
    }

    this.calculateDate = function (timestamp) {
        return new Date(timestamp * 1000);
    }
}]);