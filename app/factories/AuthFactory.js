"use strict";

app.factory("AuthFactory", function(){

	let currentUser = null;
	let isLoggedIn = false;

	let provider = new firebase.auth.GoogleAuthProvider();

	let createUser = function(userObj){
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);
	};

	let loginUser = function(userObj) {
		return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password);
	};

	let logoutUser = function(){
		console.log("logoutUser");
		return firebase.auth().signOut();
	};

	let isAuthenticated = function (){
		console.log("running isAuthenticated");
		return new Promise ( (resolve, reject) => {
			firebase.auth().onAuthStateChanged( (user) => {
				if (user){
					currentUser = user.uid;
					resolve(true);
				}else {
					resolve(false);
				}
			});
		});
	};

	let getUser = function(){
		return currentUser;
	};

	let authWithProvider= function(){
    	return firebase.auth().signInWithPopup(provider);
  	};



  	firebase.auth().onAuthStateChanged(function(user) {
  		console.log("onAuthStateChanged running");
    if (user) {
      currentUser = user.uid;
      isLoggedIn = true;
      console.log("currentUser logged in?", currentUser);
      console.log("logged in t-f", isLoggedIn );
      // $scope.$apply(); 
    } else {
      currentUser = null;
      isLoggedIn = false;
      console.log("currentUser logged out?", currentUser);
      // $window.location.href = "#/login";
    }
  });

	return {createUser, loginUser, logoutUser, isAuthenticated, getUser, authWithProvider};
});