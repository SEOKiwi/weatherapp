// DIRECTIVES
weatherApp.directive("weatherReport", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/weatherReport.html?v=20140128',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToStandard: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   }
});

weatherApp.directive('selectOnClick', ['$timeout', function ($timeout) {
    // Linker function
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            $timeout(function(){
                element[0].focus();
                element[0].select();
            }, 0);
            element.bind('click', function () {
                this.select();
            });

        }
    };
}]);
