ticketModule.factory('TicketServices',function($http){

    var headers_content = {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'};

    return{

        //---- get all Creditor ----//
        
        getTicket: function(params){

            return $http.get(appUrl+'ticket/getAllTicket?token='+localStorage.getItem('appToken')+'&user_id='+localStorage.getItem('user_id'),{params:params,headers:headers_content})            
        },

        // ---- add Creditor ----//

        addTicket: function(params){

            return $http.post(appUrl+'ticket/add_ticket?token='+localStorage.getItem('appToken'),$.param(params),{headers:headers_content})            
        },

        // ---- get Creditor by id ----//

        getTicketById: function(params){

            return $http.get(appUrl+'ticket/getTicket?token='+localStorage.getItem('appToken'),{params:params,headers:headers_content})            
        },

        // ---- update Creditor ----//

        updateTicket: function(params){

            return $http.post(appUrl+'ticket/updateTicket?token='+localStorage.getItem('appToken'),$.param(params),{headers:headers_content})            
        },

        // ---- delete Creditor ----//

        deleteTicket: function(params){

            return $http.get(appUrl+'ticket/delete?token='+localStorage.getItem('appToken'),{params:params,headers:headers_content})            
        },

       
         getTicketStatus: function(params){

            return $http.get(appUrl+'ticket/ticketstatus?token='+localStorage.getItem('appToken'),{params:params,headers:headers_content})            
        },

         getPriority: function(params){

            return $http.get(appUrl+'ticket/priority?token='+localStorage.getItem('appToken'),{params:params,headers:headers_content})            
        },

        getNewNumber: function(params){

            return $http.get(appUrl+'ticket/getnew_ticketNumber?token='+localStorage.getItem('appToken'),{params:params,headers:headers_content})            
        },

        getUser: function(params){

            return $http.get(appUrl+'users/getAllUser?token='+localStorage.getItem('appToken'),{params:params,headers:headers_content})            
        }
    }
});