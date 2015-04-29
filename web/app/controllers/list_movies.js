MovieApp.controller('ListMoviesController', function($scope, FirebaseService) {
    
    $scope.movies = FirebaseService.getMovies();
    
    $scope.deleteMovie = function(movie) {
        FirebaseService.removeMovie(movie);
    };
});