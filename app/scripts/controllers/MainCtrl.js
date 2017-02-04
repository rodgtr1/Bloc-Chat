(function() {
  function MainCtrl(Room, $uibModal) {
    /* getRooms is a function created in Room.js and .all is the object calling roomsArray. We inject the Room service into this controller */
    this.chatrooms = Room.getRooms().all;
  
  this.openModal = function() {
    
    var modalInstance = $uibModal.open({ 
      //template url correspond to modal to be opened
      templateUrl: '/templates/modal.html',

      //controller for modal
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
    .controller('MainCtrl', ['Room', '$uibModal', MainCtrl]);
})();