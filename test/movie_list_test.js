describe('Movie list', function () {
    var controller, scope;

    var FirebaseServiceMock;

    beforeEach(function () {
        module('MovieApp');

        FirebaseServiceMock = (function () {
            var movies = [
                {name: "leffa1", director: "ohjaaja1", release: "2011", description: "kuvaus1"},
                {name: "leffa2", director: "ohjaaja2", release: "2011", description: "kuvaus2"}
            ];
            return {
                getMovies: function () {
                    return movies;
                }
            };
        })();
        
        spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();

    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('ListMoviesController', {
	        $scope: scope,
	        FirebaseService: FirebaseServiceMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että Firebasesta (mockilta) saadut elokuvat löytyvät konrollerista
  	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
  	*/ 
	it('should list all movies from the Firebase', function(){
		var movies = scope.getMovies();
                expect(movies[1].name).toBe("leffa2");
                expect(FirebaseServiceMock.getMovies).toHaveBeenCalled();
	});

	/* 
	* Testaa, että elokuvan pystyy poistamaan Firebasesta.
	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
	*/
	it('should be able to remove a movie', function(){
		expect(true).toBe(false);
	});
});