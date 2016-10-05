app.controller('HomeController', function(ProviderService, $location, $http){
  var ctrl = this
  var url = 'http://localhost:3000/api/v1/providers'

  this.showHome = function(){
    return $location.path() === '/'
  } 

  this.search = function(){
    ProviderService.getProviders().success(function(data){
      ctrl.providers = data
    })
  }

  this.editProvider = function(id){
    var lookup = {}
      for (var i = 0, len = this.providers.length; i < len; i++) {
        lookup[this.providers[i].id] = this.providers[i];
      } 
      debugger
    //   return lookup[id]
    // var data = {location: this.provider.location}

    // //ProviderService.updateProvider(ctrl.provider.id)
    // //debugger
    // return $http.patch('http://localhost:3000/api/v1/providers', data).error(function(err) {
    //   console.log("There was an error")
    //   })
    }
})