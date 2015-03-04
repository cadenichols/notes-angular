'use strict';

angular.module('notes-angular')
  .controller('NavCtrl', ['$scope', '$rootScope', '$state', 'User', function($scope, $rootScope, $state, User){
    $scope.logout = function() {
      User.logout().then(function(){
        delete $rootScope.email;
        $state.go('home');
      });
    };
  }]);