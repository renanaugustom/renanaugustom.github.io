var app = angular.module("githubio", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.
    	when('/#', { templateUrl: 'views/home.html', controller: 'HomeController' }).
        when('/home', { templateUrl: 'views/home.html', controller: 'HomeController' }).  
        when('/posts', { templateUrl: 'views/posts.html', controller: 'PostsController' }).
        when('/novoobjetivonovosrumos', { templateUrl: 'views/novoobjetivonovosrumos.html'}).
      otherwise({ redirectTo: '/home' });
});