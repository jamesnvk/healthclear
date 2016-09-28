app.controller('HomeController', function(ProviderService, $location){
  var ctrl = this
  var url = 'http://localhost:3000/api/v1/providers'

  this.showHome = function(){
    return $location.path() === '/'
  } 

  this.search = function(){
    ProviderService.getProviders().success(function(data){
      ctrl.items = data
    })
  }

})