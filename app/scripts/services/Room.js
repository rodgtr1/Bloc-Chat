(function() {
  function Room($firebaseArray) {
    
    /* References the Firebase database. Child calls the children of "rooms" (room1, room2, room3)*/
    var ref = firebase.database().ref().child("rooms");
    
    /* $firebaseArray returns data as an array */
    var roomsArray = $firebaseArray(ref);
    
    /* object holding getRooms and addRoom function*/
    var rooms = {
      getRooms: getRooms,
      addRoom: addRoom
    };
    
    return rooms;
    
    /* gets all rooms from firebase database in an array */
    function getRooms() {
      return {
        all: roomsArray
      }
    };
    
    /* adds room to firebase database */
    function addRoom(name) {
      roomsArray.$add(name);
    };

  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();