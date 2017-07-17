
angular.module('app')

.controller('chatCtrl', ($scope, chatServ) => {

  $scope.messages = []
  var socket = io();

  $scope.appendMsg = (msg) => {
    socket.emit('chat message', {text: msg, time: new Date});
    // $scope.messages.push(msg)
    $scope.msg = ""

  }


  socket.on('chat message', function(msg){
     $scope.messages.push({text: msg, time: new Date}) 
    });

  $scope.test = "yeh next now, where now huh?";


  

  
  
  

})


// ng-modle

//






