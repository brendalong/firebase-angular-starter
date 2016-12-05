"use strict";

app.controller('NavCtrl', function($scope, AuthFactory, $location, $window){
	$scope.navItems = [
		{
			name: 'Login/Register',
			url: '#/login'
		}
	];

	$scope.isAuth = false;

	$scope.checkAuth = AuthFactory.isAuthenticated()
	.then( (resolve) => {
		$scope.isAuth = resolve;
	});

	$scope.logoutUser = () => {
		console.log("you clicked logout");
    	AuthFactory.logoutUser()
    	.then( () => {
    		$window.location.href = "#/";
    		$scope.checkAuth();
    		// $scope.apply();
    	});
	};


});