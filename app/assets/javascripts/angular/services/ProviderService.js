app.service('ProviderService', function($http){
  this.getProviders = function() {
    return $http.get('http://localhost:3000/api/v1/providers');
  };
})