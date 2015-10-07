(function(){
	'use strict';

	angular.module('users1')
		.controller('UserCreateController', UserCreateController);

		UserCreateController.$inject = ['UserService'];

		function UserCreateController(User) {
			var vm = this;

			vm.type = 'create';

			vm.saveUser = function() {
				vm.processing = false;

				vm.message = '';

				User.create(vm.userData)
					.then(function(res) {
						vm.processing = false;
						vm.message = res.data.message;
					});
			};
		};
})();