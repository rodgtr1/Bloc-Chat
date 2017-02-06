(function() {
  function MainCtrl(Message, Room, $uibModal) {
    /* getRooms is a function created in Room.js and .all is the object calling roomsArray. We inject the Room service into this controller */
    this.chatrooms = Room.getRooms().all;
    
    
    
    // load without a room selected. Will be used to hold current room.
    this.currentRoom = null;
    
    // states whether room name is shown or not
    this.currentRoomShowing = false;
    
    this.messages = null;
    
    //sets the current rooom to the one clicked
    this.setCurrentChatRoom = function(clickedRoom) {
      this.currentRoom = clickedRoom;
      this.messages = Message.getByRoomId(this.currentRoom.$id);
    };
    
  
    //method for Main Controller to open modal 
    this.openModal = function() {
    
    var modalInstance = $uibModal.open({ 
      //template url correspond to modal to be opened
      templateUrl: '/templates/modal.html',

      //controller for modal. Opted to include here instead of separate controller (i.e. ModalCtrl.js)
      controller: function($scope, $uibModalInstance) {
        $scope.newRoom = {$value: ''};

        $scope.cancel = function() {
          $uibModalInstance.dismiss('cancel');
        };

        
        $scope.create = function() {
          $uibModalInstance.close($scope.newRoom);
        };
      },
      size: 'md',
    });

    modalInstance.result.then(function(data) {
      Room.addRoom(data);    
    });

    };
  };
  
  

  angular
    .module('blocChat')
    .controller('MainCtrl', ['Message', 'Room', '$uibModal', MainCtrl]);
})();