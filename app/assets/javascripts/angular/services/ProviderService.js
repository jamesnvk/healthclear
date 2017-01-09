app.service('ProviderService', function($http){
  this.getProviders = function() {
    return $http.get('http://localhost:3000/api/v1/providers')
  }
  this.createProvider = function(data){
    return $http.post('http://localhost:3000/api/v1/providers', data)
  }
  this.getProvider = function(id) {
    return $http.get('http://localhost:3000/api/v1/providers/' + id)
  }
  this.updateProvider = function(data){
    return $http.patch('http://localhost:3000/api/v1/providers/' + data.id, data)
  }
})