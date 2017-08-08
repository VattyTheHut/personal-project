angular.module('app')
.service('userServ', function($http) {
    // this.getMessages = function() {
    //     return $http.get('http://localhost:3006/messages')
 
    // }

    this.postMessage = function(message) {
        return $http.post('/postMessage', message)
    }

    
})
