app.service('ProviderService', function($http){
  this.getProviders = function() {
    return $http.get('http://localhost:3000/api/v1/providers')
  }
  this.createProvider = function(data){
    return $http.post('http://localhost:3000/api/v1/providers', data)
  }
})