'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp',['ui.router','ui.bootstrap','ngStorage'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
          .state('main',{
            url: '/',
            templateUrl: "view1/view1.html",
            controller: "mainCtrl"
          })

    }])