MovieApp.controller('UserController', function ($scope, $location, AuthService) {

    $scope.logIn = function () {
        AuthService.logUserIn($scope.email, $scope.password)
                .then(function () {
                    $location.path('/movies');
                })
                .catch(function () {
                    $scope.message = 'Väärä sähköpostiosoite tai salasana!';
                });
    };

    $scope.register = function () {
        AuthService.createUser($scope.newEmail, $scope.newPassword)
                .then(function () {
                    AuthService.logUserIn($scope.newEmail, $scope.newPassword)
                            .then(function () {
                                $location.path('/movies');
                            });
                })
                .catch(function () {
                    $scope.message = 'Tapahtui virhe! Yritä uudestaan';
                });
    };
});