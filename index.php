<!DOCTYPE html>
<html lang="en-us" ng-app="weatherApp">
<head>
    <title>Weather Forecast</title>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- load bootstrap and fontawesome via CDN -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />

    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>
    <!-- load angular via CDN -->
    <script src="//code.angularjs.org/1.3.9/angular.min.js"></script>
    <script src="//code.angularjs.org/1.3.9/angular-route.min.js"></script>
    <script src="//code.angularjs.org/1.3.9/angular-resource.min.js"></script>
    <script src="//code.angularjs.org/1.3.9/angular-cookies.min.js"></script>
    <script src="js/app.js"></script>
    <script src="js/routes.js"></script>
    <script src="js/services.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/directives.js"></script>
    <script src="js/ngAutocomplete.js"></script>
    <script src="js/geolocation.js"></script>
</head>
<body>
<header>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="/">Weather Forecast</a>
            </div>

            <ul class="nav navbar-nav navbar-right">
                <li><a href="#/"><i class="fa fa-home"></i> Home</a></li>
                <li><a href="#/forecast">Forecast</a></li>
            </ul>
        </div>
    </nav>
</header>

<div class="container">
    <!-- This is the view holder that represents the routes in routes.js -->
    <div ng-view></div>

</div>

</body>
</html>