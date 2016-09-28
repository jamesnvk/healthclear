app.controller('HomeController', function($location){
  var ctrl = this
  this.showHome = function(){
    return $location.path() === '/'
  } 
})