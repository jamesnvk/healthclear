app.controller('HomeController', function(ProviderService, $location){
  var ctrl = this
  this.showHome = function(){
    return $location.path() === '/'
  } 

  this.searchApp = function(){
    var results = []
    ProviderService.getProviders()
    .then(function(response) {
      results.push(response.data)
    })
  }
})