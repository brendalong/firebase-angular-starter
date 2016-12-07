"use strict";

var app = angular.module("CRUDApp", ["ngRoute"]);

//used to authenticate user when navigating to other views
let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
  // console.log("running isAuth");
	AuthFactory.isAuthenticated()
	.then ( (userExists) => {
    console.log("userExists", userExists);
		if (userExists){
      console.log("Authenticated, go ahead.");
			resolve();
		}else {
      console.log("Authentication rejected, go away.");
			reject();
		}
	});
});

//setup routing to other views
app.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/login.html',
      controller: "UserCtrl"
    }).
    when('/login', {
      templateUrl: 'partials/login.html',
      controller: "UserCtrl"
    }).
    when('/login-details', {
      templateUrl: 'partials/user-details.html',
      controller: 'UserDetailsCtrl',
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