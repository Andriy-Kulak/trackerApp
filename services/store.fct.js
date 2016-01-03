/**
 * Store Factory for storing shows picked from search results page
 */
angular
	.module('app.services')
	.factory('StoreFactory', dataService);

function dataService(localStorageService) {

	// where each of the tracked shows will exist
	var _shows = [];

	// retrieving shows data from local storage
	var ls = localStorageService.get('store');
	if(ls !== null) {
		_shows = ls;
	}

	//  methods used in this factory
	var service = {
		'addShow': addShow,
		'getShow': getShow,
		'getShows': getShows,
		'removeShow': removeShow
	};

	// adds show
	function addShow(data) {
		_shows.push(data);
		save();
	}


	// get a specific show within shows array
	function getShow(id) {
		var result = false;
		angular.forEach(_shows, function(show){
			if (result === false) {
				if (show.id === id) {
					result = show;
				}
			}
		});
		return result;
	}

	// returns all shows array
	function getShows() {
		return _shows;
	}


	// finds show selected and removes it
	function removeShow(id) {
		var idx = -1;
		var found = false;
		angular.forEach(_shows, function(show){
			if (found === false) {
				if (show.id === id) {
					found = true;
				}
				idx++;
			}
		});
		if (found === true) {
			_shows.splice(idx, 1);
			save();
		}
	}

	// save selected shows to local storage
	function save() {
		localStorageService.set('store', _shows);
	}

	return service;
}