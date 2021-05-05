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
        return $http.delete(db.db + '/' + bucketListItemId);
      },
      addItem: function (bucketListItem) {
        return $http.post(db.db, bucketListItem);
      }
    };
  });
