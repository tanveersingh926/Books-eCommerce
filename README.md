[INPROGRESS]
# Ecommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4. It is not completed there are still plenty of things need to be implemented.

## To View Demo
Install all dependencies, run `npm install`.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## To View Demo with Angular Universal
Install all dependencies, run `npm install`. Run `npm run serve:ssr` then navigate to `http://localhost:4000/`. You can then right-click on mouse and click on view source. You will find Angular Universal in action.

## To View Service Worker in Action
Build the application in production mode, run `ng build --prod`. It will generate dist folder, inside dist folder navigate to ecommerce folder in terminal and run it via local server. You can use http-server, install it via `npm i -g http-server`, after installation run `http-server -p 8081`. Open http://localhost:8081 , then disable wifi or go in developer tools, in application tab, on left side click on service Service Workers, then check offline box. Refresh the page, application will still render properly

## Features Implemented

- @ngrx/store
- @ngrx/effects
- Angular Universal
- Service Workers
- Caching assets offline and dynamic
- Routing via Angular Router
- Auth Guard
- Interceptor
- Landing Page with all books
- Details Page
- Checkout screen
- My orders
---

## Features Not Implemented

- Annotation for Methods.
- Angular Materials for dialogs.

## CSS Spinner
Loader: https://codepen.io/animatedcreativity/pen/OjBPQJ