MovieApp.service('FirebaseService', function ($firebase) {
    var firebaseRef = new Firebase('blinding-inferno-2444.firebaseio.com/movies');
    var sync = $firebase(firebaseRef);
    var movies = sync.$asArray();

    this.getMovies = function () {
        return movies;
    };

    this.addMovie = function (movie) {
        movies.$add(movie);
    };
    
    this.editMovie = function(movie) {
        movies.$save(movie);
    };
    
    this.removeMovie = function(movie) {
        movies.$remove(movie);
    };

    this.getMovie = function (key, done) {
        movies.$loaded(function () {
            done(movies.$getRecord(key));
        });
    };
        
});

