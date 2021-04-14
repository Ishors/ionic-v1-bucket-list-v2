angular.module('starter.services', [])

.factory('BucketList', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var bucketList = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return bucketList;
    },
    remove: function(bucketListItem) {
      bucketList.splice(bucketList.indexOf(bucketListItem), 1);
    },
    get: function(bucketListItemId) {
      for (var i = 0; i < bucketList.length; i++) {
        if (bucketList[i].id === parseInt(bucketListItemId)) {
          return bucketList[i];
        }
      }
      return null;
    }
  };
});
