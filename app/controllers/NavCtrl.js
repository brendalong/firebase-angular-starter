"use strict";

app.controller('NavCtrl', function($scope){
// console.log("what isAuth", isAuth);
	$scope.navItems = [
		{
			name: 'Login/Register',
			url: '#/login'
		}
	];
});