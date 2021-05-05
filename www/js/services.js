angular.module('starter.services', [])

  .factory('BucketList', function ($http, db) {
    // Might use a resource here that returns a JSON array
    // Some fake testing data

    // Will ad an if statement that distribute the data
    // between "fulfilled" and "toFulfill" arrays
    // when I'll use $http requests and a DB
    return {
      all: function () {
        return $http.get(db.db + '/_design/bucket-list/_view/all');
      },
      fulfilled: function () {
        return $http.get(db.db + '/_design/bucket-list/_view/fulfilled');
      },
      toFulfill: function () {
        return $http.get(db.db + '/_design/bucket-list/_view/toFulfill');
      },
      getItem: function (bucketListItemId) {
        return $http.get(db.db + '/' + bucketListItemId);
      },
      removeItem: function (bucketListItemId) {
        return $http.get(db.db + '/' + bucketListItemId).then(function(response){
          $http.delete(db.db + '/' + bucketListItemId+'?rev='+response.data._rev);
        });
      },
      addItem: function (bucketListItem) {
        return $http.post(db.db, bucketListItem);
      },
      complete: function(bucketListItemId){
        var today = new Date();
        var jsonDate = JSON.stringify(today);
        return $http.get(db.db + '/' + bucketListItemId).then(function(response){
          $http.put(db.db + '/' +bucketListItemId,
          {
            "_id": response.data._id,
            "_rev": response.data._rev,
            "created": response.data.created,
            "title": response.data.title,
            "description": response.data.description,
            "deadline": response.data.deadline,
            "photo": response.data.photo,
            "completed": true,
            "completedDate": jsonDate
          });
        });
      }
    };
  })

  .factory('Format', function () {
    return{
      date: function(date){
        var split = date.split("-");
        var daySplit = split[2].split("T");
        return daySplit[0] + '/' + split[1] + '/' +split[0].substring(1,split[0].length);
      }
    }
  })
  
  .factory('Popup', function ($ionicPopup) {
    return{
      complete: function(){
        return $ionicPopup.alert({
                  title: 'Congrats !!',
                  template: "You've fulfilled one of your dream ! Keep going !",
                  cssClass: 'popUp'  
                });
      },  
      delete: function(){
        return $ionicPopup.confirm({
                  title: 'Are you sure ?',
                  template: 'This action cannot be reversed',
                  cssClass: 'popUp',
                  buttons: [
                    { text: 'No' },
                    {
                      text: '<b>Yes</b>',
                      type: 'button-positive',
                      onTap: function(e) {
                        return e;
                      }
                    }
                  ]  
                });
      }
    }
  });