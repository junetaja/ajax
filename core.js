var app = angular.module('myApp',[]);

app.controller('tesCtrl', function($scope,  $http) {


	$scope.login = function() {

    		// $scope.data_customers = [];
        username = $scope.username;
        password = $scope.password;

    		// $scope.hasil = '';
      //           $http({
      //             method : 'POST',
      //             url : "https://150.107.149.186/api/login",
      //             //headers: {'Content-Type': 'application/json'},
      //             data : [{
      //                                username: username,
      //                                password: password
      //                               }]
      //           }).success(function(data) {
      //             console.log(data);
      //             $scope.hasil = data;
      //           });


      data =[{
               username: username,
               password: password
            }];
      config = [];
      function successCallback(response) {
        console.log(response);
      };
      function errorCallback(response) {
        console.log(response);
     };

      $http.post('https://150.107.149.186/api/login', data, config).then(successCallback, errorCallback);
        
    	};



});

