var app  = angular.module('app', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        })

        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
        })


        // HOME STATES AND NESTED VIEWS ========================================
        .state('signup', {
            url: '/signup',
            templateUrl: 'views/signup.html'
        })

        // HOME STATES AND NESTED VIEWS ========================================
        .state('chatroom', {
            url: '/chatroom',
            templateUrl: 'views/chatroom.html'
        })
        
        .state('profile', {
            url: '/profile',
            templateUrl: 'views/profile.html'
        })


        .state('browser', {
            url: '/browser',
            templateUrl: 'views/browser.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        })

        .state('signup2', {
            url: '/signup2',
            templateUrl: 'views/signUp2.html'
        })
        
}).directive('mainNav', function() {
  return {
    templateUrl: 'directive/mainNav.html'
  };
}).directive('endFooter', function() {
    console.log("endfooter")
  return {
    templateUrl: './directive/end-footer.html'
  };
  
});

