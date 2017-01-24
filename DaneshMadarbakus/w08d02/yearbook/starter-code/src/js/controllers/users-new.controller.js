angular
  .module('wdiYearbook')
  .controller('UsersNewCtrl', UsersNewCtrl);

UsersNewCtrl.$inject = ['UserFac', '$state', '$stateParams'];
function UsersNewCtrl(UserFac, $state, $stateParams){
  const vm = this;
  console.log($stateParams);
  vm.user = {};

  vm.create = UserCreate;

  function UserCreate(){
    UserFac
      .save(vm.user)
      .$promise
      .then(() => {
        $state.go('usersIndex');
      });
  }

  vm.edit = usersEdit;

  function usersEdit() {
    UserFac
      .update($stateParams, vm.user)
      .$promise
      .then(() => {
        $state.go('usersIndex');
      });
  }
}
