(function() {
  function Message($firebaseArray, $cookies, Room) {
    var ref = firebase.database().ref().child("messages");

    var messages = $firebaseArray(ref);
    
    return {
      getByRoomId: function(roomId) {
        
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      },
      
      send: function(newMessage, roomId) {
        var messageDateTime = new Date;
        messages.$add({
          username: $cookies.get('blocChatCurrentUser'),
          content: newMessage,
          roomId: roomId,
          sentAt: messageDateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        });
        
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
})();