'use strict';
(function(){

	angular.module('users')
		.controller('UserController', UserController);

		UserController.$inject = ['UserService'];

		function UserController(User) {
			vm = this;

			vm.processing = true;

			User.all()
				.then(function(data) {
					vm.processing = false;

					vm.users = data;
				});

		}


})();