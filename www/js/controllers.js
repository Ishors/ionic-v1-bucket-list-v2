angular.module('starter.controllers', [])

.controller('FulfilledCtrl', function($scope, BucketList) {
  $scope.orderProp = 'deadline';

  $scope.bucketList = BucketList.fulfilled();

  $scope.remove = function(bucketListItem) {
    BucketList.removeFulfilled(bucketListItem);
  };
})

.controller('ToFulfillCtrl', function($scope, BucketList) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.orderProp = 'deadline';
  
  $scope.bucketList = BucketList.toFulfill();

  $scope.remove = function(bucketListItem) {
    BucketList.removeToFulfill(bucketListItem);
  };
})

.controller('BucketListItemDetailsFulfilledCtrl', function($scope, $stateParams, BucketList) {
  $scope.bucketListItem = BucketList.getFulfilled($stateParams.bucketListItemId);
})

.controller('BucketListItemDetailsToFulfillCtrl', function($scope, $stateParams, BucketList) {
  $scope.bucketListItem = BucketList.getToFulfill($stateParams.bucketListItemId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
