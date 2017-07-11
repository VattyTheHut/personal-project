angular.module('app', ['ui.router'])


.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){


    $urlRouterProvider.otherwise('/')
    $stateProvider

        .state("Home", {
          url: '/',
          templateUrl: 'views/Home.html'
        })
        .state("login", {
            url: '/login',
            templateUrl: 'views/login.html'
        })
        .state("profile", {
            url: '/profile',
            templateUrl: 'views/profile.html'
        })
        .state("signup", {
            url: '/signup',
            templateUrl: 'views/signup.html'
        })
        .state("chatroom", {
            url: '/chatroom',
            templateUrl: 'views/chatroom.html'
        })
        


}])
