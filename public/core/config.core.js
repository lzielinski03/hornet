(function() {
	'use strict';

	angular.module('core').config(configRoutes);

	configRoutes.$inject = ['$routeProvider', '$locationProvider'];

	function configRoutes ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'core/view/home.html'
			})
			.when('/login', {
				templateUrl : 'user/view/login.html',
				controller: 'coreController',
				controllerAs: 'login'
			})
			.otherwise({
				templateUrl : 'core/view/home.html'
			});

		$locationProvider.html5Mode(true);
	};
})();