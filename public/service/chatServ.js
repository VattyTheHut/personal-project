angular.module('app')
.service('chatServ', function($http) {
    // this.getMessages = function() {
    //     return $http.get('http://localhost:3006/messages')
 
    // }

    // var messages = []

    this.appendMsg = (msg) => {
        messages.push(msg)
    }


    // $(function () {
    //   console.log("got to the function")

    //     var socket = io();
    //     // $('form').submit(function(){
    //     //     socket.emit('chat message', $('#m').val());
    //     //     $('#m').val('');
    //     //     return false;
    //     //  });



    //     socket.on('message history', function(history) {
    //         console.log(history)
    //         for (var message of history) {
    //             $('#messages').append($('<li>').text(message));
    //         }
    //     })

    //     socket.on('chat message', function(msg){
    //         $scope.messages.push(msg);
    //     });
    // })


})


// function getMessages() {
  //   mainServ.getMessages()
  //     .then(function(whatevercomesback) {
  //       console.log(whatevercomesback)
  //       $scope.messages = whatevercomesback.data.messages
  //     })

  // }