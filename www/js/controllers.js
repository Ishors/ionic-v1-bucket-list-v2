angular.module('starter.controllers', [])

  .controller('FulfilledCtrl', function ($scope, BucketList, $timeout) {
    $scope.orderProp = 'key.completedDate';

    BucketList.fulfilled().then(function (response) {
      $scope.bucketList = response.data.rows;
      for (var i=0; i<$scope.bucketList.length; i++){
        var date = $scope.bucketList[i].key.completedDate;
        var split = date.split("-");
        var daySplit = split[2].split("T");
        var displayDate = daySplit[0] + '/' + split[1] + '/' +split[0].substring(1,split[0].length);
        $scope.bucketList[i].key.completedDate = displayDate;
      }
    }, function (error) {
      console.log("Error occured ", error);
    });
    $scope.remove = function (bucketListItemId) {
      BucketList.removeItem(bucketListItemId).then(function (response) {
        $scope.doRefresh();
        console.log("Item deleted");
      }, function (error) {
        console.log("Error occured ", error);
      });
    };

    $scope.doRefresh = function () {
      $timeout(function () {
        BucketList.fulfilled().then(function (response) {
          $scope.bucketList = response.data.rows;
        }, function (error) {
          console.log("Error occured ", error);
        });
        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      }, 1000);
    };
  })

  .controller('ToFulfillCtrl', function ($scope, $ionicModal, BucketList, $timeout) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.orderProp = 'key.deadline';

    BucketList.all().then(function (response) {
      var items = response.data.rows;
      $scope.length = items.length;
    }, function (error) {
      console.log("Error occured ", error);
    });

    BucketList.toFulfill().then(function (response) {
      $scope.bucketList = response.data.rows;
    }, function (error) {
      console.log("Error occured ", error);
    });

    $scope.remove = function (bucketListItemId) {
      BucketList.removeItem(bucketListItemId).then(function (response) {
        $scope.doRefresh();
        console.log("Item deleted");
      }, function (error) {
        console.log("Error occured ", error);
      });
    };

    $scope.complete = function (bucketListItemId) {
      BucketList.complete(bucketListItemId).then(function (response) {
        $scope.doRefresh();
        console.log("Item Completed");
      }, function (error) {
        console.log("Error occured ", error);
      });
    };

    var today = new Date();
    $scope.currentYear = today.getFullYear();

    $ionicModal.fromTemplateUrl('templates/add-item-modal.html', {
      scope: $scope,
      animation: 'slide-in-up',
    }).then(function (modal) {
      $scope.modal = modal;
    });
    
    $scope.openModal = function () {
      $scope.modal.show();
    };
    $scope.closeModal = function () {
      $scope.modal.hide().then(function(response){
        $scope.modal.remove();
        $ionicModal.fromTemplateUrl('templates/add-item-modal.html', {
          scope: $scope,
          animation: 'slide-in-up',
        }).then(function (modal) {
          $scope.modal = modal;
        });
      });
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
      // Execute action
    });


    $scope.createItem = function (newItem) {
      var itemToPost;
      if (newItem.title && newItem.description && newItem.deadline){
        itemToPost =
        {
          "created": $scope.length + 1,
          "title": newItem.title,
          "description": newItem.description,
          "deadline": newItem.deadline,
          "photo": "img/sup.png",
          "completed": false
        };
        BucketList.addItem(itemToPost).then(function (response) {
          console.log("Item added");
        }, function (error) {
          console.log("Error occured ", error);
        });
        $scope.doRefresh();
        $scope.closeModal();
        }
    };

    $scope.doRefresh = function () {
      $timeout(function () {
        BucketList.toFulfill().then(function (response) {
          $scope.bucketList = response.data.rows;
        }, function (error) {
          console.log("Error occured ", error);
        });
        $scope.$broadcast('scroll.refreshComplete');
      }, 50);
    };
  })

  .controller('BucketListItemDetailsFulfilledCtrl', function ($scope, $stateParams, BucketList) {
    BucketList.getItem($stateParams.bucketListItemId).then(function (response) {
      $scope.bucketListItem = response.data;
      var date = $scope.bucketListItem.completedDate;
      var split = date.split("-");
      var daySplit = split[2].split("T");
      var displayDate = daySplit[0] + '/' + split[1] + '/' +split[0].substring(1,split[0].length);
      $scope.bucketListItem.completedDate = displayDate;
    }, function (error) {
      console.log("Error occured ", error);
    });
  })

  .controller('BucketListItemDetailsToFulfillCtrl', function ($scope, $stateParams, BucketList) {
    BucketList.getItem($stateParams.bucketListItemId).then(function (response) {
      $scope.bucketListItem = response.data;
    }, function (error) {
      console.log("Error occured ", error);
    });
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })