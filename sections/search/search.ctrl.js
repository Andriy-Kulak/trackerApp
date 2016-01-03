angular.module('app.core').controller('SearchController', function(ShowService, $timeout, StoreFactory){
    var vm = this;

    vm.results = false;
    vm.searching = false;

    // provides search results based on input
    vm.query = function(query) {
        vm.searching = true;
        ShowService.search(query).then(function(response){
            vm.results = response;
            $timeout(function(){
                vm.searching = false;
                }, 500);

        });
    };

    // add show to shows array within show factory
    vm.trackShow = function(show) {
        StoreFactory.addShow(show);
    };

    // remove show from array withing show factory
    vm.unTrackShow = function(id) {
        StoreFactory.removeShow(id);
    };

    //will determine if show has already been added based on id
    vm.hasShow = function(id) {
        return (StoreFactory.getShow(id) !== false);
    };


});
