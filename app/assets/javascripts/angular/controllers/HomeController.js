app.controller('HomeController', function(ProviderService, $location, $stateParams, $state){
  var ctrl = this
  var url = 'http://localhost:3000/api/v1/providers'

  this.comments = [];

  this.addComment = function(){
    ctrl.comments.push(ctrl.textModel)
    ctrl.textModel = ""
  }


  this.goToLocation = function(location){
    var providers = ctrl.providers
    $state.go('home.locations', 
      { 
        locationName: location,
        providersArray: providers 
      })
  }

  this.lookup = function(id){
    var lookup = {}
      for (var i = 0, len = this.providers.length; i < len; i++) {
        lookup[this.providers[i].id] = this.providers[i]
      } 
    var provider = lookup[id]
    return provider
  }

  this.showHome = function(){
    return $location.path() === '/'
  } 

  this.search = function(){
    ProviderService.getProviders().success(function(data){
      ctrl.providers = data
    })
  }

  this.editProvider = function(id){
    provider = ctrl.lookup(id)
    ProviderService.updateProvider(provider)
  }

  this.incrementRating = function(id){
    provider = ctrl.lookup(id)
    provider.rating += 1
    ProviderService.updateProvider(provider)
  }

  this.decrementRating = function(id){
    provider = ctrl.lookup(id)
    provider.rating -= 1
    ProviderService.updateProvider(provider)
  }
  
  this.priceIncludes = []
    
  this.includePrice = function(price) {
    var i = ctrl.priceIncludes.indexOf(price)
      if (i > -1) {
        ctrl.priceIncludes.splice(i, 1)
      } else {
        ctrl.priceIncludes.push(price)
      }
  }
    
  this.priceFilter = function(provider) {
    if (ctrl.priceIncludes.length > 0) {
      if (ctrl.priceIncludes.indexOf(provider.price) < 0)
        return
      }
    return provider
  }
})