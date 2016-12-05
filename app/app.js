"use strict";

var app = angular.module("CRUDApp", ["ngRoute"]);

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