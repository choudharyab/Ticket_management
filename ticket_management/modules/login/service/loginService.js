loginModule.factory('loginService',function($http){
    return function (params) {
        return $http.post(appUrl+'users/authenticate', $.param(params),{headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        })
    }
}).factory('getGroupData',function($http){
    return function (params) {
        return $http.get(appUrl+'group_listing',{params:params,header:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
        })
    }
}).factory('getFirmData',function($http){
    return function (params) {
        return $http.get(appUrl+'ticket/getAllTicket',{params:params,header:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
        })
    }
});