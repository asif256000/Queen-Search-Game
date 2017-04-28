'use strict';

angular.module('myApp')
.controller('mainCtrl',['$scope','$parse','mainService',function ($scope,$parse,mainService) {

  console.log("inside mainController..");

  $scope.selectedPlanet=[];
  $scope.disabledPlanet=[];
  $scope.planetList=[];
  $scope.spaceShipList=[];
  $scope.totalTime=0;
  $scope.destinyOne;
  $scope.destinyTwo;
  $scope.destinyThree;
  $scope.destinyFour;
  this.getPlanetList=function () {

    mainService.planets().then(function (successData) {

      $scope.planetList=successData.data;

    },
    function (errorData) {

      console.log('errorData:',errorData);
    })

  }

  this.getPlanetList();

  this.getToken=function () {

    mainService.token().then(function (successData) {

      console.log(successData.data);

    },
    function (errorData) {

    })

  }

  this.getToken();


  $scope.getModifiedPlanetList=function(PlanetName){


    console.log(PlanetName);
    var planet=angular.fromJson(PlanetName);
    $scope.selectedPlanet.push(planet);
      for( var i=0; i<$scope.planetList.length; i++) {
        if( $scope.planetList[i].name === planet.name)
        {
          $scope.disabledPlanet.push(PlanetName);
        }
      }
    console.log($scope.disabledPlanet);

  }


  $scope.getSpaceShipList=function () {

    $scope.spaceShipList=[];
    mainService.spaceShips().then(function (successData) {

          var spaceShpList=successData.data;
          for (var i=0;i<spaceShpList.length;i++){
            if(spaceShpList[i].max_distance>$scope.selectedPlanet[0].distance){
              $scope.spaceShipList.push(spaceShpList[i]);
            }
          }

    },
    function (errorData) {
      console.log(errorData.data);
    })

  }
  
  $scope.calculateTotalTime=function (spaceShip) {

    console.log(spaceShip.speed);
    console.log($scope.selectedPlanet);

    $scope.totalTime=$scope.totalTime+($scope.selectedPlanet[0].distance/spaceShip.speed);

    $scope.selectedPlanet.pop();


  }




  }])
