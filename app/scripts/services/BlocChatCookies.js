(function() {
  function BlocChatCookies($cookies, $uibModal) {

    //checks if there is a user stored in cookies. Stores that information as currentUser variable
    var currentUser = $cookies.get('blocChatCurrentUser');
    
    //if there is no currentUser (variable above) stored, then open the modal
    if (!currentUser || currentUser === '') {
      
      //opens modal with defined info. Keyboard value disables Esc key. Backdrop value stops from clicking off the modal. 
      $uibModal.open({
        templateUrl: '/templates/cookies.html',
      //CookieCtrl is where we will store entered username
        controller: 'CookieCtrl as cookie',
        size: 'sm',
        keyboard: false,
        backdrop: 'static'
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();