angular.module('app.core').controller('ShowController', function(data, seasons){
    var vm = this;
    vm.data = data;

    //new journal entry user adds in the page
    vm.newEntry = {};
    vm.seasons = seasons;



    // episodes that exist in a particular season
    vm.episodes = [];
    vm.gettingEpisodes = false;
    vm.getEpisodes = function() {
        vm.gettingEpisodes = true;
        ShowService.getSeason(vm.data.id, vm.newEntry.seasonNumber).then(function(response){
            vm.episodes = response.episodes;
            vm.gettingEpisodes = false;
        });
    };

    // method saves the journal entry with season and episode number
    vm.saveEntry = function() {
        if (vm.data.diary_entries == undefined) {
            vm.data.diary_entries = [];
        }
        vm.newEntry.date = new Date();
        vm.data.diary_entries.push(vm.newEntry);
        vm.newEntry = {};
    };

    // method removes selected journal entry
    vm.removeEntry = function($index) {
        vm.data.diary_entries.splice($index, 1);
    };
});

