var PSAppsControllers = angular.module('PSAppsControllers', []);

//Home page controller
PSAppsControllers.controller('homeCtrl', ['$scope', '$http', '$location',

    function ($scope, $http, $location) {
        //page title
        $scope.pagetitle = "Home";

        $scope.getAllPlaybooks = function () {
             //view data
            $http.get('/playbooks').success(function (data) {
                $scope.playbooklist = data;
            })
        }

        $scope.getAllPlaybooks();

/*        $scope.postToDb = function(){
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
        }*/


    }]);


//playbook page controller
PSAppsControllers.controller('pbCtrl', ['$scope', '$http', '$location',

    function ($scope, $http, $location) {

        $scope.submit = function(){

        }

    }]);
