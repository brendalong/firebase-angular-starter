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
    |- values
    |- factories
    |- controllers
    |- app.js
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

* Within `lib` folder, install necessary `node_modules` (run `package.json` and `bower.json`). Be sure to include Firebase.
* Within `values`, create a `FBCreds.js` file with your database details: aipKey, authDomain, databaseURL.
* Within `app.js`, use run to grap database details from FBCreds.
* Be sure to add js files to index.html (third party and app specific)
* Add `ng-app="the-name-of-your-app"` to `index.html`

## See it in Action
* Add routing to `index.html`
    * For each route, create a corresponding controller
* Create `navbar.html` partial and add a login button.
* Create `NavCtrl`
