angular.module('starter.controllers', [])

.controller('FulfilledCtrl', function($scope) {})

.controller('ToFulfillCtrl', function($scope, BucketList) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.bucketList = BucketList.all();
  $scope.remove = function(bucketListItem) {
    BucketList.remove(bucketListItem);
  };
})

.controller('BucketListItemDetailsCtrl', function($scope, $stateParams, BucketList) {
  $scope.bucketListItem = BucketList.get($stateParams.bucketListItemId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
