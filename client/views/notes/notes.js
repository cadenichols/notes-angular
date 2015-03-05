'use strict';

angular.module('notes-angular')
  .controller('NotesCtrl', ['$scope', '$state', '$stateParams', 'Note', function($scope, $state, $stateParams, Note){
    $scope.moment = moment;
    $scope._ = _;
    if ($state.current.name === 'notes.list') {
      $scope.tag = $state.params.tag;
      Note.list().then(
        function(response){
          $scope.notes = response.data;
        }, function() {
          console.log('Note.list() failed. state is notes.list');
        }
      );
    }
    if ($state.current.name === 'notes.show') {
      Note.show($stateParams.noteId).then(
        function(response){
          console.log(response.data);
          $scope.note = response.data;
        }, function() {
          console.log('Note.list() failed. state is notes.show');
        }
      );
    }
    $scope.tagFilter = function(note){
      if(!$scope.tag || !note.tags){return true;}
      return _.any(note.tags, function(t){return t === $scope.tag;});
    };
    $scope.submit = function(note) {
      Note.create(note).then(
        function(){
          $state.go('notes.list');
        },function(){
          console.log('Note.create() failed.');
      });
    };
  }]);
