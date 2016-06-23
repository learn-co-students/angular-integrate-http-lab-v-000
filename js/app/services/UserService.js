function UserService($http) {

  this.getUser = function() {
    return $http.get('http://0.0.0.0:8882/rest/user');
  };

  this.updateUser = function(firstName, lastName, email) {
    return $http.post('http://0.0.0.0:8882/rest/user', 
                      {first_name: firstName,
                       last_name: lastName,
                       email: email });
  };
}

angular
	.module('app')
	.service('UserService', UserService);
