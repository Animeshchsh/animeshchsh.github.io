var app =angular.module('act',['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
    .when("/main", {
        templateUrl : "main.html",
        controller : 'MainCtrl'
    });
});

app.controller('MainCtrl',['$scope','$log','$filter', function($scope, $log, $filter){

	$scope.name = 'ani';
	$scope.filteredName = $filter('uppercase')($scope.name)
	$log.info($scope.name);
	$log.info($scope.filteredName);
	$log.log('This is log function');
	$log.warn('This is log warning');
	$log.debug('This is log debug function');
	$log.error('This is log error function');

}]);