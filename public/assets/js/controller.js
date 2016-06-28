var PSAppsControllers = angular.module('PSAppsControllers', ['ngRoute']);

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
PSAppsControllers.controller('pbCtrl', ['$scope', '$http', '$routeParams',

    function ($scope, $http, $routeParams) {

        $scope.playbookid = $routeParams.pbId;

        //console.log($scope.playbookid);

        if($scope.playbookid!=undefined) {
            //if the playbook id is filled in then go get the current record
            $http.get('/playbooks/' + $scope.playbookid).success(function (data) {
                $scope.pbData = data;
                $scope.ptitle = data.title;
                $scope.favoritechoice = data.favorite;
            });
        }

        $scope.submit = function () {
            //console.log($scope.favoritechoice);
            // var obj = "{title:'" + $scope.ptitle + "',favorite:" + $scope.favoritechoice + "}";
            var obj={};
            obj.title=$scope.ptitle;
            obj.favorite=$scope.favoritechoice;
            //var obj = "{title:'" + $scope.ptitle + "'}";
            var json = JSON.stringify(obj);

            if ($scope.playbookid!=undefined) {
                console.log("doing put");
                $http({
                    method: 'PUT',
                    url: '/playbooks/' + $scope.playbookid,
                    data: json,
                    headers: {'Content-Type': 'application/json'}
                })
                    .success(function () {
                        //console.log("playbook " + $scope.playbookid + " updated");
                        $scope.updatemsg="Playbook Updated";
                    })
            } else {
                console.log("doing post");
                $http({
                    method: 'POST',
                    url: '/playbooks',
                    data: json,
                    headers: {'Content-Type': 'application/json'}
                })
                    .success(function () {
                        console.log("new playbook created");
                        $scope.ptitle = "";
                        $scope.updatemsg="New Playbook Saved";
                    })
            }

        }

    }]);
