'use strict';
(function() {
	angular.module('core')
		.controller('coreController', coreController)
		.controller('homeController', homeController)
		.controller('contactController', contactController)
		.controller('aboutController', aboutController);

	coreController.$inject = ['$rootScope', '$location', 'Auth']

	function coreController($rootScope, $location, Auth) {
		var vm = this;
		
		vm.loggedIn = Auth.isLoggedIn();

		$rootScope.$on('$routeChangeStart', function() {
			vm.loggedIn = Auth.isLoggedIn();

			Auth.getUser()
				.then(function(res) {
					console.log(res);
					vm.user = res.data;
				});
		});

		vm.doLogin = function() {
			vm.processing = true;
			vm.error = '';

			Auth.login(vm.loginData.username, vm.loginData.password)
				.then(function(data) {
					if (data.sucess)
						$location.path('/users');
					else
						vm.error = data.message;
					vm.processing = false;
				});
		};

		vm.doLogout = function() {
			Auth.logout();
			vm.user = {};
			$location.path('/login');
		};
	};

	function homeController() {
		var vm = this;
		vm.message = 'This is the home page!';
	};

	function contactController() {
		var vm = this;
		vm.message = 'This is the home page!';
	};

	function aboutController() {
		var vm = this;
		vm.message = 'Contact us! JK. This is just a demo.';
	}

})();