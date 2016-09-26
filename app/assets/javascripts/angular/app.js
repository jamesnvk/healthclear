var app = angular
  .module('app', ['ui.router', 'ngResource'])
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
       controller: 'ProvidersController as ctrl'
     })
    .state('home.providers', {
       url: 'providers',
       templateUrl: 'home/providers.html',
       controller: 'ProvidersController as ctrl'
     })
     .state('home.provider', {
       url: 'provider/:id',
       templateUrl: 'home/show.html',
       controller: 'ProvidersController as ctrl'
     })

  $urlRouterProvider.otherwise('/');
}); 