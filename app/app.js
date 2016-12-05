"use strict";

var app = angular.module("CRUDApp", ["ngRoute"]);

//used to authenticate user when navigating to other views
let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
	AuthFactory.isAuthenticated()
	.then ( (userExists) => {
		if (userExists){
			resolve();
		}else {
			reject();
		}
	});
});

//setup routing to other views
app.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/login.html',
      controller: "LoginCtrl"
    }).
    when('/login', {
      templateUrl: 'partials/login.html',
      controller: "LoginCtrl"
    }).
    when('/items/list', {
      templateUrl: 'partials/item-list.html',
      controller: 'ItemListCtrl',
      resolve: {isAuth}
    }).
    otherwise('/');
});


//run this right when the app loads
app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain
	};
	firebase.initializeApp(authConfig);
});

console.log("is auth", isAuth);