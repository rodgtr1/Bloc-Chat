(function() {
  function ModalCtrl($uibModalInstance, Room) {
    this.newRom = "";

        this.cancel = function() {
          $uibModalInstance.dismiss('cancel');
        };


        this.create = function() {
          Room.addRoom(this.newRoom);    
          $uibModalInstance.close();
        };

    };

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
  
})(); 