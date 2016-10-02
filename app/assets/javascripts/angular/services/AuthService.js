app.service('AuthService', function(Auth){
  var ctrl = this
  this.signedIn = function() {
    Auth.isAuthenticated
  } 

  this.logout = function() {
    Auth.logout
  }

  this.currentUser = function() {
    Auth.currentUser().then(function (user){
    ctrl.user = user
    debugger
    })
  }

})






