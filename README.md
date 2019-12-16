# NgFaAot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Reproduce AOT run-time error

Run `npm run start-dist` to produce an _unoptimized_ AOT build (production configuration) and serve it.

Navigate to `http://localhost:4200/`, and note the error in the JavaScript console:

```
ERROR NullInjectorError: StaticInjectorError(AppModule)[FaIconComponent -> FaConfig]: 
  StaticInjectorError(Platform: core)[FaIconComponent -> FaConfig]: 
    NullInjectorError: No provider for FaConfig!
    at NullInjector.get (http://localhost:4200/main-es2015.5c479ad85e374062b8b9.js:8816:27)
    at resolveToken (http://localhost:4200/main-es2015.5c479ad85e374062b8b9.js:23605:24)
    at tryResolveToken (http://localhost:4200/main-es2015.5c479ad85e374062b8b9.js:23531:16)
    at StaticInjector.get (http://localhost:4200/main-es2015.5c479ad85e374062b8b9.js:23382:20)
    at resolveToken (http://localhost:4200/main-es2015.5c479ad85e374062b8b9.js:23605:24)
    at tryResolveToken (http://localhost:4200/main-es2015.5c479ad85e374062b8b9.js:23531:16)
    at StaticInjector.get (http://localhost:4200/main-es2015.5c479ad85e374062b8b9.js:23382:20)
    at resolveNgModuleDep (http://localhost:4200/main-es2015.5c479ad85e374062b8b9.js:34409:29)
    at NgModuleRef_.get (http://localhost:4200/main-es2015.5c479ad85e374062b8b9.js:35473:16)
    at resolveDep (http://localhost:4200/main-es2015.5c479ad85e374062b8b9.js:36001:45)
defaultErrorLogger @ main-es2015.5c479ad85e374062b8b9.js:13146
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
