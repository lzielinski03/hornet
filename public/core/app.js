'use strict';
(function() {
	angular.module('core', [
		'ngRoute',
		'ngAnimate',
		'authService',
		'users1'
		]
	).config(config);

	config.$inject = ['$httpProvider'];

	function config($httpProvider) {
		$httpProvider.interceptors.push('AuthInterceptor');
	};
})();