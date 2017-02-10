(function() {
  function MainCtrl(Room, Message, $uibModal, $cookies) {
    /* getRooms is a function created in Room.js and .all is the object calling roomsArray. We inject the Room service into this controller */
    this.chatrooms = Room.getRooms().all;
    
    
    
    // load without a room selected. Will be used to hold current room.
    this.currentRoom = "";
    
    // states whether room name is shown or not
    this.currentRoomShowing = false;
    
    this.messages = "";
    
    this.content = "";
    
    this.openModal = function() {
      var modalInstance = $uibModal.open({ 
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal'
      });

    };
    
    //sets the current rooom to the one clicked
    this.setCurrentChatRoom = function(clickedRoom) {
      this.currentRoom = clickedRoom;
      this.messages = Message.getByRoomId(this.currentRoom.$id);
    };
    
    this.sendMessage = function() {
      if (this.content) {
      Message.send(this.content, this.currentRoom.$id);
        this.content = "";
      } 
    };
    
    //method for Main Controller to open modal 

};
  

  angular
    .module('blocChat')
    .controller('MainCtrl', ['Room', 'Message', '$uibModal', '$cookies', MainCtrl]);
})();