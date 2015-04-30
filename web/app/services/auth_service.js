MovieApp.service('AuthService', function ($firebase, $firebaseAuth) {
    var firebaseRef = new Firebase('blinding-inferno-2444.firebaseio.com');
    var firebaseAuth = $firebaseAuth(firebaseRef);

    this.logUserIn = function (email, password) {
        return firebaseAuth.$authWithPassword({
            email: email,
            password: password
        });
    };

    this.logUserOut = function () {
        firebaseAuth.$unauth();
    };

    this.createUser = function (email, password) {
        return firebaseAuth.$createUser({
            email: email,
            password: password
        });
    };

    this.getUser = function () {
        return firebaseAuth.$getAuth();
    };
    
    this.checkLoggedIn = function() {
        return firebaseAuth.$waitForAuth();
    };
});