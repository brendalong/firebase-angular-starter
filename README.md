# Starter file for using Firebase with Angular and user login

## Setup Firebase
* Setup Firebase with project. 
* For our purposes, set rules to read and write to true.
* Enable Authentication for Email and Google logins.
* Add Firebase to your web app: obtain the apiKey, authDomain, and databaseURL.
* Optional: upload some sample data via a json file.

## Setup Angular Files
* Create folder structure:
```
- app
    |
    |- factories
    |- controllers
    |- app.js
    |- values
    |
- css
- lib
    |
    | - bower_components
    | - node_modules
    | - bower.json
    | - Gruntfile.js
    | - package.json
    |
- partials
- sass
- index.html

```

## Follow along and review files
* Within `lib` folder, install necessary `node_modules` (run `package.json` and if necessary `bower.json`). Be sure to include Firebase.
* Within `values`, create a `FBCreds.js` file with your database details: aipKey, authDomain, databaseURL.
* Be sure to add js files to `index.html` (third party and app specific)
* Add `ng-app="the-name-of-your-app"` to `index.html`

## See it in Action
### app.js
* Add routing for various views. Each view will have a corresponding controller.
* Be sure to include `ng-view` in the `index.html`
* Create `isAuth` to verify user when viewing routes.
* `app.run` to obtain Firebase credentials.

### Partial: navbar.html & Controller: NavCtrl.js
* Create `navbar.html` partial. Add login and logout. Use `ng-show` based on value of `isLoggedIn`.
* Create `NavCtrl`.
* Use `firebase.auth().onAuthStateChanged` to set `$scope.isLoggedIn` and allow the navbar to display context related links.
* Login and Logout links will change the view (route).
* Add search to partial (if needed) and variable in the controller.

### Partial: login.html & Controller: UserCtrl.js
* Partial displays options for login/registraion with links to functions within the controller.
* Controller has items it runs automatically and functions that are called as needed.
* Controller depends on AuthFactory to return promise regarding login/registration.

### Factory: AuthFactory.js

* Firebase always returns a promise.
* Once a user registers, the login function runs automatically.





