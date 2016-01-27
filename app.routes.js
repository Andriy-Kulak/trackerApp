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
        .when('/show/:id', {
            templateUrl: 'sections/show/showPage.html',
            controller: 'ShowController',
            controllerAs: 'show',
            // User will not be sent to the individual show page until all the information is gathered
            resolve: {
                data: function(StoreFactory, $route) {
                    return StoreFactory.getShow($route.current.params.id);
                },
                seasons: function(ShowService, $route) {
                    return ShowService.get($route.current.params.id).then(function(response){
                        return response.seasons;
                    })
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });
}