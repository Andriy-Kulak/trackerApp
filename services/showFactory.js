angular
	.module('app.services')
	//
	.constant('API_KEY', '87de9079e74c828116acce677f6f255b')
	.constant('BASE_URL', 'http://api.themoviedb.org/3')
	.factory('ShowService', dataService);

function dataService($http, API_KEY, BASE_URL, $log) {
	//object references all the methods available within a factory in a single glance
	var data = {
		'get': get,
		'search': search,
		'getSeason': getSeason
	};

	// Ajax request for TV show
	function makeRequest(url, params) {
		var requestUrl = BASE_URL + '/' + url + '?api_key=' + API_KEY;
		angular.forEach(params, function(value, key){
			requestUrl = requestUrl + '&' + key + '=' + value;
		});
		return $http({
			'url': requestUrl,
			'method': 'GET',
			'headers': {
				'Content-Type': 'application/json'
			},
			'cache': true
		}).then(function(response){
			return response.data;
		}).catch(dataServiceError);
	}

	//Single get function to request function on a single TV Show
	function get(id) {
		return makeRequest('tv/' + id, {});
	}

	//submit query to service and retreive data that has been searched for
	function search(query){
		return makeRequest('search/tv', {query: query}).then(function(data){
			return data.results;
		});
	}

	function getSeason(showId, seasonNumber) {
		return makeRequest('tv/' + showId + '/season/' + seasonNumber, {});
	}

	return data;

	// triggered if error happens
	function dataServiceError(errorResponse) {
		$log.error('Error in ShowService');
		$log.error(errorResponse);
		return errorResponse;
	}
}