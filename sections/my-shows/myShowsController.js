angular.module('app.core').controller('MyShowsController',['StoreFactory', '$scope', function(StoreFactory, $scope){
    var vm = this;

    // getting list of shows from my shows Controller
    vm.results = StoreFactory.getShows();


    // method to untrack a show in "My Shows" view
    vm.unTrackShow = function(id) {
        StoreFactory.removeShow(id);
    };

    /**
     * Notes
     * @param newNote
     */

    // method to untrack a show in "My Shows" view
    vm.includeNote = function(newNote) {
        StoreFactory.addNote(newNote);
    };

    // getting list of notes from my shows Controller
    vm.notesResults = StoreFactory.getNotes();



}]);
