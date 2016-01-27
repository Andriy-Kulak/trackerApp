angular
    .module('app.routes', ['ngRoute'])
    .config(routes);

function routes($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'sections/whats-on/whatsOn.html',
            controller: 'WhatsOnController',
            controllerAs: 'whatsOn'
        })
        // Page where all your tracked shows are stored
        .when('/my-shows', {
            templateUrl: 'sections/my-shows/myShows.html',
            controller: 'MyShowsController',
            controllerAs: 'myShows'
        })
        //Search page when you get to search for shows and track/untrack them
        .when('/search', {
            templateUrl: 'sections/search/searchPage.html',
            controller: 'SearchController',
            controllerAs: 'search'
        })

        .otherwise({
            redirectTo: '/'
        });
}