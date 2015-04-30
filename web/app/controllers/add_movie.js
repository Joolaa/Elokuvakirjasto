MovieApp.controller('AddMovieController', function($scope, $location, currentAuth, FirebaseService) {

    if (!currentAuth) {
        $location.path('/login');
    }
    $scope.movie = {};
    
    $scope.addMovie = function() {
        
        if(!checkFields) {
            return;
        }
        
        FirebaseService.addMovie({
            name: $scope.movie.name,
            director: $scope.movie.director,
            release: $scope.movie.release,
            description: $scope.movie.description
        });
        
        clearFields();
        $location.path("/movies");
    };
    
    var clearFields = function() {
        $scope.movie.name = "";
        $scope.movie.director = "";
        $scope.movie.release = "";
        $scope.movie.description = "";
    };
    
    var checkFields = function() {
        return $scope.movie.name.length > 0 
                && $scope.movie.director.length > 0
                && $scope.movie.release.length > 0
                && $scope.movie.description.length > 0;
    };
});
