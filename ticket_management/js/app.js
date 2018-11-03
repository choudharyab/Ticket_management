'use strict';

var appUrl = "http://localhost:3000/api/";

//var appUrl = "shreebaba/api/";

var headers_content = {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','token':localStorage.getItem('appToken')};


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers','loginModule','ticketModule','homeModule'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {templateUrl: 'modules/login/view/login.html', controller: 'loginController'});
  
  $routeProvider.when('/login', {templateUrl: 'modules/login/view/login.html', controller: 'loginController'});

 $routeProvider.when('/home', {templateUrl: 'modules/home/view/home.html', controller: 'homeController'});

  $routeProvider.when('/ticket', {templateUrl: 'modules/ticket/view/ticket.html',controller:'ticketController'});

  
  $routeProvider.otherwise({redirectTo: '/'});

}]).run(['$rootScope','$location',function($rootScope,$location){
  if(localStorage.getItem('appToken') == null){
    $location.path('/login');
  }
 
}]);
