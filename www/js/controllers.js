angular.module('starter.controllers', [])

  .controller('FulfilledCtrl', function ($scope, BucketList) {
    $scope.orderProp = 'deadline';

    $scope.bucketList = BucketList.fulfilled();

    $scope.remove = function (bucketListItem) {
      BucketList.removeFulfilled(bucketListItem);
    };
  })

  .controller('ToFulfillCtrl', function ($scope, $ionicModal, BucketList) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.orderProp = 'deadline';

    $scope.bucketList = BucketList.toFulfill();

    $scope.remove = function (bucketListItem) {
      BucketList.removeToFulfill(bucketListItem);
    };

    $ionicModal.fromTemplateUrl('templates/add-item-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function () {
      $scope.modal.show();
    };
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
      /*$scope.modal.remove();
      $ionicModal.fromTemplateUrl('templates/add-item-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.modal = modal;
      });*/
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
      // Execute action
    });
    
    $scope.createItem = function(newItem) {        
      $scope.closeModal();
    };
  })

  .controller('BucketListItemDetailsFulfilledCtrl', function ($scope, $stateParams, BucketList) {
    $scope.bucketListItem = BucketList.getFulfilled($stateParams.bucketListItemId);
  })

  .controller('BucketListItemDetailsToFulfillCtrl', function ($scope, $stateParams, BucketList) {
    $scope.bucketListItem = BucketList.getToFulfill($stateParams.bucketListItemId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })