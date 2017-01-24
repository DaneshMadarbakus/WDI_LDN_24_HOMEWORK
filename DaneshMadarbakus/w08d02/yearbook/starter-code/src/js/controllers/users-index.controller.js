angular
  .module('wdiYearbook')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['UserFac'];
function UsersIndexCtrl(UserFac) {
  const vm = this;
  vm.users = UserFac.query();

}
