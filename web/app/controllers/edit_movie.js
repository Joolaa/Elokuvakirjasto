MovieApp.controller('EditMovieController', function($scope, $location, $routeParams, FirebaseService) {
    
    $scope.movie = {};
    
    FirebaseService.getMovie($routeParams.id, function(movie) {
        $scope.movie = movie;
    });
    
    $scope.editMovie = function () {

        if (!checkFields) {
            return;
        }
     
        
        FirebaseService.editMovie($scope.movie);
        
        clearFields();
        $location.path("/movies");
    };

    var clearFields = function () {
        $scope.movie.name = "";
        $scope.movie.director = "";
        $scope.movie.release = "";
        $scope.movie.description = "";
    };

    var checkFields = function () {
        return $scope.movie.name.length > 0
                && $scope.movie.director.length > 0
                && $scope.movie.release.length > 0
                && $scope.movie.description.length > 0;
    };
});