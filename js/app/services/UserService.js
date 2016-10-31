function UserService($http) {
  var serv = this;
  serv.getUser = function(){
    return $http({
      method: 'GET',
      url: 'http://0.0.0.0:8882/rest/user'
    })
  }
  serv.updateUser = function(new_email){
    return $http({
      method: 'POST',
      url: 'http://0.0.0.0:8882/rest/user',
      data: {email: new_email}      
    })
  }
}

angular
	.module('app')
	.service('UserService', UserService);