app.controller('LocationsController', function($stateParams, $state, $filter){
  this.providers = $stateParams.providersArray
  this.locationName = $stateParams.locationName

  this.filteredLocations = $filter('filter')(this.providers, {location: this.locationName})
})