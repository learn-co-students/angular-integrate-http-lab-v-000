function UserService($http) {
    this.getUser = function () {
      return $http.get('http://0.0.0.0:8882/rest/user');
    };

    this.updateUser = function () {
    	data = {'first_name': 'Edgar', 'last_name': 'Gonzalez', 'email': 'eddiiiieeee@gmail.com'};
    	return $http.post('http://0.0.0.0:8882/rest/user',data);
    };
}
 
angular
    .module('app')
    .service('UserService', UserService);