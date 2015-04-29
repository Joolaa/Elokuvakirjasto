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
    }).when('/movies/:id', {
        controller: 'ShowMovieController',
        templateUrl: 'app/views/show_movie.html'
    }).when('/movies/:id/edit', {
        controller: 'EditMovieController',
        templateUrl: 'app/views/edit_movie.html'
    }).otherwise({
        redirectTo: '/'
    });
});