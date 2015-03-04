'use strict';

angular.module('notes-angular')
  .factory('User', ['$http', function($http){
    function register(user) {
      return $http.post('/register', user);
    }
    function login(user) {
      return $http.post('/login', user);
    }
    function logout() {
      console.log('LOGOUT');
      return $http.delete('/logout');
    }
    function status() {
      return $http.get('/status');
    }
    return {register:register, login:login, logout:logout, status:status};
  }]);
