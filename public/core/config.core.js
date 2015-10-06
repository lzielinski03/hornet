'use strict';
(function() {
	angular.module('core').config(configRoutes);

	configRoutes.$inject = ['$routeProvider', '$locationProvider'];

	function configRoutes ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'core/view/home.html'
			})
			.when('/login', {
				templateUrl : 'core/view/login.html',
				controller: 'coreController',
				controllerAs: 'login'
			})
			.when('/contact', {
				templateUrl : 'core/view/contact.html',
				controller: 'contactController',
				controllerAs: 'contact'
			})
			.otherwise({
				templateUrl : 'core/view/home.html'
			});

		$locationProvider.html5Mode(true);
	};
})();