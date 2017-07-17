
angular.module('app')

.controller('chatCtrl', ($scope, chatServ) => {

  $scope.messages = []
  var socket = io();

  $scope.appendMsg = (msg) => {
    $scope.messages.push(msg)
    socket.emit('chat message', {msg});
    $scope.msg = ""

  }


  socket.on('chat message', function(msg){
     $scope.messages.push(msg) 
    });

  $scope.test = "yeh next now, where now huh?";


  

  
  
  

})


// ng-modle

//






