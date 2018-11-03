// ---- login controller ---- //

var loginModule = angular.module('loginModule',[]);

loginModule.controller('loginController',['$scope','$location','loginService','getGroupData','getFirmData',
function($scope,$location,loginService,getGroupData,getFirmData){
    
    if(localStorage.getItem('appToken')){

        $location.path('/ticket');
    }else{
        $location.path('/login');
    } 

    getFirmData().then(function(res){
        $scope.firm_list = res.data;
    });

    $scope.loginFunction = function(){

        loginService({

            email:$scope.email,
            password:$scope.password,
            //firm_id: $scope.firm_id
    
        }).then(function(res){
             console.log("cc",res.data.data.id);
            localStorage.setItem('appToken',res.data.token);

            localStorage.setItem('user_id',res.data.data.id);

            if(localStorage.getItem('appToken')){

                $location.path('/ticket');
            }else{
                $location.path('/login');
            }  

            console.log(localStorage.getItem('user_id'));      
            
        },function(res){
                
            //$scope.error_message = "Incorrect Email Or Password";

            alert('Incorrect Email Or Password');
        })
    }        
}]);

