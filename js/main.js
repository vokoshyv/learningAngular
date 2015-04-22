var app = angular.module('myApp', []);

// app.run(function($rootScope) {
//   $rootScope.name = "Tomer";
// });

app.controller('ParentController', function($scope){
  $scope.person = {greeted: false};
});

app.controller('ChildController', function($scope){
  $scope.sayHello = function(){
    $scope.person.greeted = true;
  }
});

