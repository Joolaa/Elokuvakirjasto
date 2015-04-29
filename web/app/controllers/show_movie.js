MovieApp.controller('ShowMovieController', function($scope, $routeParams, FirebaseService) {
    
    $scope.movie = {};
    
    FirebaseService.getMovie($routeParams.id, function(movie) {
        $scope.movie = movie;
    });
});


