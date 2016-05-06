var PSAppsControllers = angular.module('PSAppsControllers', []);

//Summary view controller
PSAppsControllers.controller('listCtrl', ['$scope', '$http', '$location',

    function ($scope, $http, $location) {
        //page title
        $scope.pagetitle = "Home";

        $scope.getAllUsers = function () {
             //view data
            $http.get('/users').success(function (data) {
                $scope.userlist = data;
            })
        }

        $scope.getAllUsers();

        $scope.postToDb = function(){
            var obj="{name:'" + $scope.newuser + "'}";
            var json=JSON.stringify(eval("("+obj +")"));
            $http({
                method: 'POST',
                url: '/users',
                data: json,
                headers: {'Content-Type': 'application/json'}
            })
                .success(function () {
                    console.log("new user created");
                    $scope.getAllUsers();
                    $scope.newuser= "";
                })
        }


        $scope.deleteName = function (theid) {

            if (theid == undefined) {

            } else {
                $http({
                    method: 'DELETE',
                    url: '/users/' + theid,
                    headers: {'Content-Type': 'application/json'}
                })
                    .success(function () {
                        $scope.getAllUsers();
                        console.log("user deleted");
                    })
            }
        }


    }]);
