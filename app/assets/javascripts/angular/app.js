var app = angular
  .module('app', ['ui.router', 'ngResource', 'templates', 'Devise', 'xeditable', 'ngMessages'])
  .config(function ($stateProvider, $urlRouterProvider){
   $stateProvider
     .state('home', {
       url: '/',
       templateUrl: 'home.html',
       controller: 'HomeController as ctrl'
     })
     .state('home.about', {
       url: 'about',
       templateUrl: 'home/about.html',
       controller: 'HomeController as ctrl'
     })
     .state('home.new', {
       url: 'new',
       templateUrl: 'home/new.html',
       controller: 'NewProviderController as ctrl'
     })
      .state('home.register', {
      url: 'register',
      templateUrl: 'home/register.html',
      controller: 'AuthController as ctrl'
     })
      .state('home.login', {
      url: 'login',
      templateUrl: 'home/login.html',
      controller: 'AuthController as ctrl'
     })
      .state('home.provider', {
       views: { 
        "more": {
          templateUrl: 'home/show.html'
          }
        },
       controller: 'ShowProviderController as ctrl'
     })
      .state('home.locations', {
      url: 'locations/:locationName',
      templateUrl: 'home/locations.html',
      controller: 'HomeController as ctrl'
     })
      

  $urlRouterProvider.otherwise('/');
}); 

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});  