(function(){
	'use strict';
		
	angular.module('users1')
		.factory('UserService', UserService);

	UserService.$inject = ['$http'];

	function UserService($http) {

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
		function update(id, userData) {
			return $http.put('/api/users/' + id, userData);
		};
		function del(id) {
			return $http.delete('/api/users/', id);
		};
	};
})();