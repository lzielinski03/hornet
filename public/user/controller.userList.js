(function(){
	'use strict';

	angular.module('users1')
		.controller('UserController', UserController);

		UserController.$inject = ['UserService'];

		function UserController(User) {
			var vm = this;
			vm.processing = true;

			User.all()
				.then(function(res) {
					vm.processing = false;
					vm.users = res.data;
				});

			vm.deleteUser = function(id) {
				vm.processing = true;
				
				User.del(id)
					.then(function(res){

						User.all()
							.then(function(res) {
								vm.processing = false;
								vm.users = res.data;
							});
						vm.processing = false;
					});
			};
		};

})();