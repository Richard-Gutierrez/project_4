(function() {
'use strict';

// all code will go in here...
angular.module('myApp', []);

angular
  .module('myApp')
  .controller('MainController', function($scope) {
       var vm = this;


    $scope.title = 'AngularJS, the Superheroic MVW Framwork';
    $scope.names = ['Nicole', 'Layne', 'Winford', 'Mattie', 'Lawanda'];
    $scope.extraNames = ['Diane', 'Santos', 'Liz', 'Gwyn'];

    $scope.addName = function() {
       if ($scope.extraNames.length) $scope.names.push($scope.extraNames.shift());
    };


    $scope.showNames = true;



    $scope.crazyColor = 'crimson';


  });





})();
