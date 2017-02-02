(function() {
  function MainCtrl(Room) {
    this.chatrooms = Room.all;
  }
  
  angular
    .module('blocChat')
    .controller('MainCtrl', ['Room', MainCtrl]);
})();