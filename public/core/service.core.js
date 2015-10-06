'use strict';
(function(){
	
	angular.module('core')
		.factory('userService', userService);

	userService.$inject = ['$http'];

	function userService($http) {

		return {
			get: get,
			all: all,
			create: create,
			update: update,
			delete: del
		};


		function get(id) {
			return $http.get('/api/users/' + id);
		};
		function all() {
			return $http.get('/api/users/');
		};
		function create(userData) {
			return $http.post('/api/users/', userData);
		};
		function update(userData) {
			return $http.put('/api/users/', userData);
		};
		function del(id) {
			return $http.delete('/api/users/', id);
		};
	};
})();