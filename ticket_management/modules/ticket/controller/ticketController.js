var ticketModule = angular.module('ticketModule',['ngBootbox']);

ticketModule.controller('ticketController',['$scope','$filter','$location','TicketServices',function($scope,$filter,$location,TicketServices){

   $scope.user_id=localStorage.getItem('user_id');
   $scope.ticket = {};
   $scope.hide_save = false;
   $scope.hide_update = true;
   $scope.ticket.created_date =$filter('date')(new Date(), "dd/MM/yyyy  h:mma");
   console.log("cc",$scope.ticket.created_date);
   //$scope.ticket.created_date=$scope.created_date;
   $scope.add_btn_clicked=function(){

       $scope.ticket = {};
       $scope.hide_save = false;
       $scope.hide_update = true;
       $scope.ticket.created_date =$filter('date')(new Date(), "dd/MM/yyyy  h:mma");
       console.log("cc1",$scope.ticket.created_date);
       $scope.getNewTicket();
   }

   $scope.getAllTicketStatus = function(){

        TicketServices.getTicketStatus().then(function(res){
            $scope.ticketstatus_data = res.data.data;
          },function(res){
                if(res.data.status==400){
                
                alert('Your token has been expire');

                localStorage.clear();

                $location.path('/login');
            }
        })
   }  
   $scope.getAllTicketStatus();

    $scope.getAllPriority = function(){

        TicketServices.getPriority().then(function(res){
            $scope.priority_data = res.data.data;
        },function(res){
                if(res.data.status==400){
                
                alert('Your token has been expire');

                localStorage.clear();

                $location.path('/login');
            }
        })
   }  
   $scope.getAllPriority();

    $scope.getAllTicket = function(user_id){

        TicketServices.getTicket({user_id:user_id}).then(function(res){
            $scope.ticket_data = res.data.data;
            if(res.data.length==0){
                
                $scope.noRecordMsg = "No Record Found";
            }
          },function(res){

            console.log(res);

            if(res.data.status==400){
                
                alert('Your token has been expire');

                localStorage.clear();

                $location.path('/login');
            }
        })
   }  
   $scope.getAllTicket();

   $scope.getAllUSer = function(){

        TicketServices.getUser().then(function(res){
            
            $scope.user_data = res.data.data;
           

            if(res.data.length==0){
                
                $scope.noRecordMsg = "No Record Found";
            }
        },function(res){

            console.log(res);

            if(res.data.status==400){
                
                alert('Your token has been expire');

                localStorage.clear();

                $location.path('/login');
            }
        })
   }  
   $scope.getAllUSer();

   $scope.getNewTicket = function(){

        TicketServices.getNewNumber().then(function(res){
             $scope.ticket = {};
            $scope.ticket.ticket_number = res.data.data;
             $scope.ticket.created_date =$filter('date')(new Date(), "dd/MM/yyyy  h:mma");
           
            if(res.data.length==0){
                
                $scope.noRecordMsg = "No Record Found";
            }
        },function(res){

            console.log(res);

            if(res.data.status==400){
                
                alert('Your token has been expire');

                localStorage.clear();

                $location.path('/login');
            }
        })
   }  
   $scope.getNewTicket();

    // ---- add ticket details ---- //

    $scope.add_ticket_details = function(){

    TicketServices.addTicket({
        ticket:$scope.ticket,

    }).then(function(res){

        $scope.ticket = {};
        $('#example2').modal('hide');

        $scope.success_msg = "Ticket added sucessfully";

        $('#success_msg').fadeIn().delay(5000).fadeOut();

        $scope.getAllTicket();

    },function(res){

        if(res.data.status==400){
            
            alert('Your token has been expire');

            localStorage.clear();

            $location.path('/login');
        }
    })
    }   

    //---- get ticket by id ----//

   $scope.get_ticket_details_by_id = function(id){

    $scope.ticket_id = id;
    $scope.hide_save = true;
    $scope.hide_update = false;

    TicketServices.getTicketById({id:id}).then(function(res){

        $('#example2').modal('show');

        $scope.showbtn = true;
        
        $scope.ticket = res.data.data;
       
    })

   }

       //---- Update ticket ----//

       $scope.update_ticket_details = function(){

        TicketServices.updateTicket({id:$scope.ticket_id,ticket:$scope.ticket}).then(function(res){

            $scope.ticket = {};
            $('#example2').modal('hide');
            $scope.success_msg = "Ticket updated sucessfully";
    
            $('#success_msg').fadeIn().delay(5000).fadeOut();
    
            $scope.showbtn = false;
    
            $scope.getAllTicket();
    
        },function(res){
    
            $scope.showbtn = false;
    
            if(res.data.status==400){
                    
                alert('Your token has been expire');
    
                localStorage.clear();
    
                $location.path('/login');
            }
        })
    
      }

   //---- delete ticket ----//

   $scope.delete_ticket_details = function(id){
    console.log("testccc",id);

    TicketServices.deleteTicket({id:id}).then(function(res){

        $scope.delete_msg = "Ticket deleted sucessfully";

        $('#delete_msg').fadeIn().delay(5000).fadeOut();
        $location.path('/ticket');

        $scope.getAllTicket();
    })
   }

}]);

