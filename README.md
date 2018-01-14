# ProjectsManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.
to show how to integrate ngrx/store & ngrx/effects and show how we can structure app with some lazy loaded module and routing. It was created based on the knowledge comming from various tutorials and spotted best practices. Project contains sample unit tests

## Mock Data (json-server)

Run `npm run json-server` for starting mock server. Navigate to `http://localhost:3004/`. Mentioned adress will present you all currently supported api routes

## Development server

Run `ng serve --proxy-config proxy.config.json` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Before you run this command please make sure that `npm run json-server` is running in other terminal (apps rellies on mocks that are hosted by json server)

## Redux Dev tools

App is configured so it can take adventage of "Redux DevTools". If you dont have this chrome extension installed please grab the latest version and after that reload the app to observe the state of application

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
