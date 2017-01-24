angular
  .module('wdiYearbook')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$http', 'API', '$stateParams', '$state'];
function UsersShowCtrl($http, API, $stateParams, $state) {
  const vm = this;
  console.log($stateParams.id);
  $http
    .get(`${API}/users/${$stateParams.id}`)
    .then(response => {
      vm.data = response.data;
      console.log(vm.data);
    });
  vm.delete = () => {
    $http
      .delete(`${API}/users/${$stateParams.id}`)
      .then(() => {
        $state.go('usersIndex');
      });
  };
}
