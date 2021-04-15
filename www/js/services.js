angular.module('starter.services', [])

.factory('BucketList', function($http) {
  // Might use a resource here that returns a JSON array
  // Some fake testing data

  // Will ad an if statement that distribute the data
  // between "fulfilled" and "toFulfill" arrays
  // when I'll use $http requests and a DB
  var toFulfill = [
    {
        "id": 1, 
        "title": "Sauter en parachute",
        "description": "Sauter en parachute accompagné puis apprendre à le faire solo",
        "deadline": 2021,
        "photo": "img/sauter-en-parachute.png",
        "completed": false
    },
    {
        "id": 2,
        "title": "Chiens de traîneaux",
        "description": "Le must serait dans les pays du Nord, sinon les pyrénées c'est pas mal aussi",
        "deadline": 2022,
        "photo": "img/chiens-de-traîneaux.png",
        "completed": false
    },
    {
        "id": 3,
        "title": "Voir une aurore boréale",
        "description": "Aucune description", 
        "deadline": 2050,
        "photo":"img/voir-une-aurore-boreale.png",
        "completed": false
    },
    {
        "id": 4,
        "title": "Travailler en Antarctique",
        "description": "Pour une durée de 12 à 18 mois loin de tout",
        "deadline": 2027,
        "photo": "img/travailler-en-antarctique.png",
        "completed": false
    },
    {
        "id": 5,
        "title": "Monter ma marque",
        "description": "Oyats vie",
        "deadline": 2022,
        "photo":"img/monter-ma-marque.png",
        "completed": false
    },
    {
        "id": 6,
        "title": "Visiter l'Islande",
        "description": "Faire le tour de l'île en van en 2 semaines",
        "deadline": 2025,
        "photo": "img/visiter-lislande.png",
        "completed": false
    },
    {
        "id": 7,
        "title": "Road-trip Italie du Nord",
        "description": "En van",
        "deadline": 2023,
        "photo": "img/road-trip-italie-du-nord.png",
        "completed": false
    },
    {
        "id": 8,
        "title": "Voyage Amérique du Sud",
        "description": "Salar et compagnie, me voilà !",
        "deadline": 2023,
        "photo": "img/voyage-amerique-du-sud.png",
        "completed": false
    },
    {
        "id": 9,
        "title": "Vivre dans les bois",
        "description": "Laisse tomber le kiff interdimentionnel",
        "deadline": 2070,
        "photo": "img/vivre-dans-les-bois.png",
        "completed": false
    },
    {
      "id": 10,
      "title": "Faire un vol 0G",
      "description": "Se laisser flotter comme un gosse",
      "deadline": 2030,
      "photo": "",
      "completed": false
    }
  ];

  var fulfilled = [
    {
      "id": 11,
      "title": "Faire du parapente",
      "description": "Faire du parapente sur la Dune du Pyla avec Roro",
      "deadline": 2022,
      "photo": "",
      "completed": true
    }
  ];

  return {
    /*all: function() {
      return bucketList;
    },*/
    fulfilled: function() {
      return fulfilled;
    },
    toFulfill: function() {
      return toFulfill;
    },
    removeFulfilled: function(bucketListItem) {
      fulfilled.splice(fulfilled.indexOf(bucketListItem), 1);
    },
    removeToFulfill: function(bucketListItem) {
      toFulfill.splice(toFulfill.indexOf(bucketListItem), 1);
    },
    getFulfilled: function(bucketListItemId) {
      for (var i = 0; i < fulfilled.length; i++) {
        if (fulfilled[i].id === parseInt(bucketListItemId)) {
          return fulfilled[i];
        }
      }
      return null;
    },
    getToFulfill: function(bucketListItemId) {
      for (var i = 0; i < toFulfill.length; i++) {
        if (toFulfill[i].id === parseInt(bucketListItemId)) {
          return toFulfill[i];
        }
      }
      return null;
    }
  };
});
