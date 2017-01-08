function UserService($http) {
  const baseUrl = `http://0.0.0.0:8882`

  this.getUser = () => {
    return $http.get(`${baseUrl}/rest/user`)
  }

  this.updateUser = () => {
    return $http.post(`${baseUrl}/rest/user`, {})
  }
}

angular
	.module('app')
	.service('UserService', UserService);
