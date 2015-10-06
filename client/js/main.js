var myApp = angular.module('myApp', ['ngRoute'])

	myApp.config(function($routeProvider){
		$routeProvider
			.when('/',
				{
					controller: 'WelcomeController',
					templateUrl: '/views/welcome.html'
				})

			.when('/welcome',
				{
					controller: 'WelcomeController',
					templateUrl: '../views/welcome.html'
				})

			.when('/login',
				{
					controller: 'WelcomeController',
					templateUrl: '../views/welcome.html'
				})

			.when('/tweets/:group/:user',
				{
					controller: 'TweetsController',
					templateUrl: '../views/tweets.html'
				})

            .otherwise({
                redirectTo: '/login'
            });

});