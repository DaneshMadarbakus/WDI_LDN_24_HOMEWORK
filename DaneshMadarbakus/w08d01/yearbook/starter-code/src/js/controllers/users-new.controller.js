angular
  .module('wdiYearbook')
  .controller('UsersNewCtrl', UsersNewCtrl);

UsersNewCtrl.$inject = ['$http', 'API', '$state', '$stateParams'];
function UsersNewCtrl($http, API, $state, $stateParams){
  const vm = this;
  console.log($stateParams);
  $http
    .get(`${API}/users/${$stateParams.id}`)
    .then(response => {
      vm.data = response.data;
      console.log(vm.data);
      console.log(this);
    });
  vm.create = () => {
    return $http
      .post(`${API}/users`, vm.user)
      .then(() => {
        $state.go('usersIndex');
      });
  };
  vm.edit = () => {
    return $http
      .patch(`${API}/users/${$stateParams.id}`, vm.user)
      .then(() => {
        $state.go('usersIndex');
      });
  };
}
