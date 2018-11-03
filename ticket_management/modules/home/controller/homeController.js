// ---- home controller ---- //

angular.module('homeModule',[]).controller('homeController',['$scope','$location',function($scope,$location){

    // ---- check token present or not ---- //

    if(localStorage.getItem('appToken')==null || localStorage.getItem('appToken')==undefined){

       $location.path('/login');
   }

    // ---- logout function ---- //

    $scope.logoutFunction = function(){

        localStorage.clear();

        $location.path('/login');        
    }
}]);