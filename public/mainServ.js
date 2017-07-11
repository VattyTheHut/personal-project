angular.module('app')
.service('mainServ', function($http) {
    // this.getMessages = function() {
    //     return $http.get('http://localhost:3006/messages')
 
    // }

    this.postMessage = function(message) {
        return $http.post('/postMessage', message)
    }

    this.postNewUser = function(signup){

        return $http.post('/postNewUser', signup)
        
    }
})