# angular
Study features of Angular ! Happy Learning !!

### Angular Bootstrapping Process

* angular.json File
  - has various properties and configuration of your Angular project
  - This file refered by builder to look for all configurations and paths
  - it has reference to **main.ts** file, which tells builder to start the app from here
  - reference to file [angular.json](angular-internals/angular.json)

* main.ts
  - entry point of application
  - main.ts helps in creating the browser environment for the application to run and this is done by -  ***import { platformBrowserDynamic } from ‘@angular/platform-browser-dynamic’;***
  - after this, main.ts file calls the function bootstrapModule(AppModule) and this is done by - ***platformBrowserDynamic().bootstrapModule(AppModule)***
  - reference to file [main.ts](angular-internals/src/main.ts)

* app.module.ts
  - From the [main.ts](angular-internals/src/main.ts) file, it is very clear that we are bootstrapping the app with AppModule. This AppModule is defined in [app.module.ts](angular-internals/src/app/app.module.ts) file.
  - This module created with the @NgModule decorator, which has -
      - declarations
        - All the new components which are getting creating within app module so that angular is aware about them.
      - imports
        - We also have imports, where we can import other modules and use in our app
      - providers
      - bootstrap
        - It will bootstrap the mentioned component and this is done by - ***bootstrap: [AppComponent]***
  - reference to file [app.module.ts](angular-internals/src/app/app.module.ts)

* app.component.ts
  - From [app.module.ts](angular-internals/src/app/app.module.ts) file, we can clearly say that the module asks to bootstrap the app component. This is done by - ***bootstrap: [AppComponent]***
  - This app component is in [app.component.ts](angular-internals/src/app/app.component.ts) file, which interacts with the html of the webpage and serves data.
  - The component is made by using @Component decorator which is imported from @angular/core.
  - This component has -
    - selector
      - custom html tag, which can use to call the component
    - templateUrl
      - contains html page to be displayed
    - styleUrls
      - component specific style sheets
    - reference to file [app.component.ts](angular-internals/src/app/app.component.ts)

* index.html
  -  At the end [index.html](angular-internals/src/index.html) file is called. Compiler dynamically adds all the javascript files at the end of this file.
  -  The html file calls the root component that is app-root. The root component is defined in [app.component.ts](angular-internals/src/app/app.component.ts) which targets [app.component.html](angular-internals/src/app/app.component.html).
  - reference to file [index.html](angular-internals/src/index.html)

* app.component.html
  - contains all the html elements and their binding which are to be displayed when the app loads.
  - Contents of this file are the first things to be displayed.
  - reference to file [app.component.html](angular-internals/src/app/app.component.html)


### Angular Data Binding

* One way binding
  - From Component to View
    - Interpolation
        - Interpolation is one-way binding
        - Should not change the state of the app
        - The expression must result in a string
        - Works only on Properties & not attributes
        - Syntax is {{ templateExpression }}
    - Property binding
  - From View to Component
    - Event Binding
* Two Way binding
  - Component to View <--> View to Component
    - ngModel

### Angular Directives

* Component Directive
* Structural Directives
  - ngFor
  - ngSwitch
  - ngIf
* Attribute Directives
  - ngModel
  - ngClass
  - ngStyle
* Custom Directives

### HttpClient
  - HttpClient is a built-in service class available in the @angular/common/http package
  - Uses the RxJS observable-based API, it returns the observable which we need to subscribe 
  - **RxJS (Reactive Extension for JavaScript).**
    - Observable is a unique object similar to Promise and it helps to manage async code
    - RxJS is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code. Angular uses observables as an interface to handle the common asynchronous operations.

### Observable & Observer

<pre>
class Observable {
    constructor(functionThatTakesObserver){
      this._functionThatTakesObserver = functionThatTakesObserver;
    }

    subscribe(observer) {
      return this._functionThatTakesObserver(observer)
    }
}
</pre>

