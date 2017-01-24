angular
  .module('wdiYearbook')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['UserFac', '$stateParams', '$state'];
function UsersShowCtrl(UserFac, $stateParams, $state) {
  const vm = this;
  vm.user = UserFac.get($stateParams);

  vm.delete = usersDelete;


  function usersDelete(){
    UserFac
    .delete($stateParams)
    .$promise
    .then(() => {
      $state.go('usersIndex');
    });
  }
}
