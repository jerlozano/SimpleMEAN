var PSApps;
PSApps = angular.module('PSApps', [
    'ngRoute',
    'PSAppsControllers'
]);

PSApps.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/list.html',
                controller: 'listCtrl'
            }).
        otherwise({
            redirectTo: '/'
        });
    }]);