app.controller('NewProviderController', function(ProviderService, $location){
  var ctrl = this
  ctrl.addProvider = function() {
    //debugger
    var data = {name: this.provider.name, price: this.provider.price, location: this.provider.location}
    //debugger
    ProviderService.createProvider(data)
    $location.path('providers')
  }
})