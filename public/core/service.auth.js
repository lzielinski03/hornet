'use strict';

(function(){
	angular.module('authService', [])
		.factory('Auth', Auth)
		.factory('AuthToken', AuthToken)
		.factory('AuthInterceptor', AuthInterceptor);

		Auth.$inject = ['$http', '$q', 'AuthToken'];
		AuthToken.$inject = ['$window'];
		AuthInterceptor.$inject = ['$q', '$location', 'AuthToken'];

		function Auth($http, $q, AuthToken) {
			return {
				login: 		login,
				logout: 	logout,
				isLoggedIn: isLoggedIn,
				getUser: 	getUser
			};

			function login(username, password) {
				return $http.post('/api/authenticate', {
					username: username,
					password: password
				})
					.then(function(res) {
						AuthToken.setToken(res.data.token);
						return res.data;
					});
			};

			function logout() {
				AuthToken.setToken();
			};

			function isLoggedIn() {
				if (AuthToken.getToken())
					return true;
				else
					return false;
			};

			function getUser() {
				if (AuthToken.getToken())
					return $http.get('/api/me', {cache: true});
				else
					return $q.reject({ message: 'User has no token.'});
			};
		};


		function AuthToken($window) {
			var authTokenFactory = {
				getToken: getToken,
				setToken: setToken
			};

			return authTokenFactory;

			function getToken() {
				return $window.localStorage.getItem('token');
			};

			function setToken(token) {
				if (token)
					$window.localStorage.setItem('token', token);
				else
					$window.localStorage.removeItem('token');
			};
		};


		function AuthInterceptor($q, $location, AuthToken) {
			var interceptorFactory = {
				request: request,
				responseError: responseError
			};

			return interceptorFactory;

			function request(config) {
				var token = AuthToken.getToken();
				if (token)
					config.headers['x-access-token'] = token;
				return config;
			};

			function responseError(response) {
				if (response.status == 403) {
					AuthToken.setToken();
					$location.path('/login');
				}
				return $q.reject(response);
			};
		};
})();