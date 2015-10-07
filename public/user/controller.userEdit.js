(function() {
	'use strict';

	angular.module('users1')
		.controller('UserEditController', UserEditController);

		UserEditController.$inject = ['$routeParams', 'UserService'];

		function UserEditController($routeParams, User) {

			var vm = this;

			vm.type = 'edit';
			User.get($routeParams.user_id)
				.then(function(res) {
					vm.userData = res.data;
				})
				.catch(function(err){
					console.error('XHR Failed for getUser. ' + err.data);
				});

			vm.saveUser = function() {
				vm.processing = true;
				vm.message = '';


				User.update($routeParams.user_id, vm.userData)
					.then(function(res) {
						
						vm.processing = false;
						vm.userData = {};
						vm.message = res.data.message;
					}).catch(function(err) {
						console.error(err);
					});
			};
		};
})();