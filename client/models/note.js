'use strict';

angular.module('notes-angular')
  .factory('Note', ['$http', function($http){
    function create(note) {
      return $http.post('/notes', note);
    }
    function list() {
      return $http.get('/notes');
    }
    function show(noteId) {
      return $http.get('/notes/' + noteId);
    }
    return {create:create, list:list, show:show};
  }]);
