var MovieApp = angular.module('MovieApp', ['firebase', 'ngRoute']);

MovieApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'ListMoviesController',
        templateUrl: 'app/views/movie_list.html'
    }).when('/movies', {
        controller: 'ListMoviesController',
        templateUrl: 'app/views/movie_list.html'
    }).when('/movies/new', {
        controller: 'AddMovieController',
        templateUrl: 'app/views/movie_add.html'
    }).otherwise({
        redirectTo: '/'
    });
});