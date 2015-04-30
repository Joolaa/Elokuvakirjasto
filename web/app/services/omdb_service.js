MovieApp.service('OMDBService', function ($http) {

    this.findMovie = function (name, year) {
        if(year !== null && year !== "") {
            return $http.get('http://www.omdbapi.com', {params: {s: name, y: year}});
        }
        return $http.get('http://www.omdbapi.com', {params: {s: name}});
    };
});