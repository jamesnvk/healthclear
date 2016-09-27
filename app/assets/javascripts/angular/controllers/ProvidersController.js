app.controller('ProvidersController', function(ProviderService, $location, $state){
  var ctrl = this
    ProviderService.getProviders()
    .then(function(response) {
      ctrl.providers = response.data
    })
})
