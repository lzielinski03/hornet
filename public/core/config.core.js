'use strict';
(function() {
	angular.module('core').config(configRoutes);

	configRoutes.$inject = ['$routeProvider', '$locationProvider', 'UserService'];

	function configRoutes ($routeProvider, $locationProvider, UserService) {
		$routeProvider
			.when('/', {
				templateUrl : 'core/view/home.html'
			})
			.when('/login', {
				templateUrl : 'core/view/login.html',
				controller: 'coreController',
				controllerAs: 'login'
			})
			.when('/users', {
				templateUrl : 'user/view/all.html',
				controller: 'UserController',
				controllerAs: 'user'
			})
			.otherwise({
				templateUrl : 'core/view/home.html'
			});

		$locationProvider.html5Mode(true);
	};
})();