'use strict';
(function() {
	angular.module('core', [
		'ngRoute',
		'ngAnimate',
		'authService',
		'users'
		]
	).config(config);

	config.$inject = ['$httpProvider'];

	function config($httpProvider) {
		$httpProvider.interceptors.push('AuthInterceptor');
	};
})();