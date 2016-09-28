app.controller('ShowProviderController', function (ProviderService, $stateParams) {
  var ctrl = this
  ProviderService.getProvider($stateParams.id)
    .then(function(response) {
      ctrl.provider = response.data
    })
})