
angular.module('app')

.controller('mainCtrl', function($scope, mainServ) {
  console.log('the contoller is working?')

  $scope.messages = [
    {id: 1, sender: "Brian", text: "Hello"}, 
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
    {id: 2, sender: "Vatekeh", text: "Hey back"},
  ]

  // function getMessages() {
  //   mainServ.getMessages()
  //     .then(function(whatevercomesback) {
  //       console.log(whatevercomesback)
  //       $scope.messages = whatevercomesback.data.messages
  //     })

  // }
  $scope.submitMessage = function(message) {
    // var obj = {message: message}
    mainServ.postMessage(message)
    // .then(function(response) {
    //   getMessages()
    // })
  }


  $scope.submitSignup = function(signup){

    mainServ.postNewUser(signup)

  }


})
.directive('mainNav', function() {
  return {
    templateUrl: 'directive/mainNav.html'
  };
});






