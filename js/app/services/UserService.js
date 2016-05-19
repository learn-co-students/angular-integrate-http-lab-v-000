function UserService($http) {
  this.getUser = function (){
    return $http.get('http://0.0.0.0:8882/rest/user');
  };

  this.updateUser = function(new_email){
    return $http.post('http://0.0.0.0:8882/rest/user', {email: new_email});
  };
}

angular
	.module('app')
	.service('UserService', UserService);
