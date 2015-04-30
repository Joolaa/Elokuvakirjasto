var MovieApp = angular.module('MovieApp', ['firebase', 'ngRoute']);

MovieApp.run(function(AuthService, $rootScope, $location){
  $rootScope.logOut = function(){
    AuthService.logUserOut();
    $location.path('/movies');
  };

  $rootScope.userLoggedIn = AuthService.getUser();
});

MovieApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'ListMoviesController',
        templateUrl: 'app/views/movie_list.html'
    }).when('/login', {
        controller: 'UserController',
        templateUrl: 'app/views/user_form.html'
    }).when('/movies', {
        controller: 'ListMoviesController',
        templateUrl: 'app/views/movie_list.html',
        resolve: {
            currentAuth: function (AuthService) {
                return AuthService.checkLoggedIn();
            }
        }
    }).when('/movies/new', {
        controller: 'AddMovieController',
        templateUrl: 'app/views/movie_add.html',
        resolve: {
            currentAuth: function (AuthService) {
                return AuthService.checkLoggedIn();
            }
        }
    }).when('/movies/:id', {
        controller: 'ShowMovieController',
        templateUrl: 'app/views/show_movie.html'
    }).when('/movies/:id/edit', {
        controller: 'EditMovieController',
        templateUrl: 'app/views/edit_movie.html',
        resolve: {
            currentAuth: function (AuthService) {
                return AuthService.checkLoggedIn();
            }
        }
    }).otherwise({
        redirectTo: '/'
    });
});

MovieApp.config(['$httpProvider', function($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);