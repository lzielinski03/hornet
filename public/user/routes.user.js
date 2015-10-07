(function() {
	'use strict';
	
	angular.module('users1').config(configRoutes);

	configRoutes.$inject = ['$routeProvider', '$locationProvider'];

	function configRoutes ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/users', {
				templateUrl : 'user/view/all.html',
				controller: 'UserController',
				controllerAs: 'user'
			})
			.when('/users/create', {
				templateUrl : 'user/view/single.html',
				controller: 'UserCreateController',
				controllerAs: 'user'
			})
			.when('/users/:user_id', {
				templateUrl : 'user/view/single.html',
				controller: 'UserEditController',
				controllerAs: 'user'
			})
			.otherwise({
				templateUrl : 'core/view/home.html'
			});

		$locationProvider.html5Mode(true);
	};
})();