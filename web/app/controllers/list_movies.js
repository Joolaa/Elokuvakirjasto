MovieApp.controller('ListMoviesController', function($scope, FirebaseService, OMDBService) {

    
    $scope.movies = FirebaseService.getMovies();
    $scope.searchedMovies = [];
    $scope.searched = false;
    
    $scope.deleteMovie = function(movie) {
        FirebaseService.removeMovie(movie);
    };
    

    
    $scope.searchMovie = function() {
        if($scope.searchName === null || $scope.searchName === "") {
            return;
        }
        
        $scope.searched = true;

        OMDBService.findMovie($scope.searchName, $scope.searchYear).success(
                function (movies) {
                    $scope.searchedMovies = movies.Search;
                }
        );
    };
    
    $scope.amountOfSearched = function() {
        
        if($scope.searchedMovies === null
                || !$scope.searchedMovies
                || $scope.searchedMovies === []
                || $scope.searchedMovies.length === 0) {
            return 0;
        }
        
        return $scope.searchedMovies.length;
    };
});