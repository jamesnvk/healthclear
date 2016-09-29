app.controller('AuthController', function ($state, Auth) {
  var ctrl = this

  this.login = function() {
    Auth.login(ctrl.user).then(function(){
      $state.go('home')
    })
  }

  this.register = function() {
    Auth.register(ctrl.user).then(function(){
      $state.go('home')
    })
  }

})