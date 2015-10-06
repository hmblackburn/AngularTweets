myApp.controller('TweetsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
   $scope.tweets = [];
   $scope.tweetUser = $routeParams.user;
   $scope.groupe = $routeParams.group
   $scope.group = $routeParams.group;
   $http.get('/messages')
       .success(function (messages) {
           messages.forEach(function (message) {
               if (message.group === $scope.group) {
                   $scope.tweets.unshift(message);
               }
           })

       })
       .error(function (err) {
           console.error(err);
       })
   $scope.post = function () {
       var tweet = {
           text: $scope.tweetBox,
           userName: $scope.tweetUser,
           group: $scope.group
       };
       $http.post('/messages', tweet)
           .success(function () {
               $scope.tweets.unshift(tweet);
           })
           .error(function (err) {
               console.error(err);
           })
   }
}]);