 myApp.controller('WelcomeController', ['$scope', '$location', function($scope, $location){
 			$scope.login = function() {
 				$location.path('/tweets/' + $scope.group + '/' + $scope.user)
 			}
 }])